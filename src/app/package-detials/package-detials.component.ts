import { Component } from '@angular/core';
import { Package } from '../model/package.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PackageService } from '../services/package.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PromoPopupComponent } from "../promo-popup/promo-popup.component";
import { DomSanitizer, SafeHtml, Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-package-detials',
  imports: [CommonModule, RouterLink, PromoPopupComponent, FormsModule],
  templateUrl: './package-detials.component.html',
  styleUrl: './package-detials.component.scss'
})
export class PackageDetialsComponent {
  package?: Package;
  recommendedPackages: Package[] = [];
  recommendedAll: Package[] = [];
  recommendedDisplayed: Package[] = [];

  // filters for recommended packages
  availableRegions: string[] = [];
  availableTypes: string[] = [];
  selectedRecRegion: string | null = null;
  selectedRecType: string | null = null;
  safeBikeHtml: SafeHtml | null = null;
  private jsonLdScript?: HTMLScriptElement;

  constructor(private route: ActivatedRoute, private packageService: PackageService, private sanitizer: DomSanitizer, private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.loadPackage(slug);
    });
  }

  private loadPackage(slug: string) {
    this.package = this.packageService.getPackageBySlug(slug);
    this.recommendedAll = this.packageService.getPackages().filter(p => p.slug !== slug);

    // compute available regions and types for these recommended packages
    const rSet = new Set<string>();
    const tSet = new Set<string>();
    this.recommendedAll.forEach(p => (p.tags || []).forEach(t => rSet.add(t)));
    this.recommendedAll.forEach(p => (p.tourTypes || []).forEach(tt => tSet.add(tt)));
    this.availableRegions = Array.from(rSet).sort();
    this.availableTypes = Array.from(tSet).sort();
    // ...existing code that sets `this.package` ...
    this.safeBikeHtml = this.package?.bike
      ? this.sanitizer.bypassSecurityTrustHtml(this.package.bike)
      : null;

    // default displayed
    this.recommendedDisplayed = this.recommendedAll.slice(0, 3);

    // apply meta tags & schema for package
    this.applyMetaAndSchema();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onRecommendedFilterChange() {
    this.recommendedDisplayed = this.recommendedAll.filter(p => {
      const regionOk = this.selectedRecRegion ? (p.tags || []).some(t => t.toLowerCase() === this.selectedRecRegion!.toLowerCase()) : true;
      const typeOk = this.selectedRecType ? (p.tourTypes || []).some(tt => tt.toLowerCase() === this.selectedRecType!.toLowerCase()) : true;
      return regionOk && typeOk;
    }).slice(0, 6); // show up to 6 suggestions
  }

  private applyMetaAndSchema() {
    if (!this.package) return;

    // Title & meta
    const description = this.package.shortDescription || '';
    const rawImage = (this.package.images && this.package.images.length) ? this.package.images[0] : '/assets/ladakh-main.jpeg';
    const image = rawImage.startsWith('http') ? rawImage : `${window.location.origin}/${rawImage.replace(/^\/+/, '')}`;
    const keywordParts = [
      this.package.title,
      ...(this.package.tags || []),
      ...(this.package.tourTypes || []),
      'Ladakh tour',
      'trip',
      'travel package'
    ];
    const keywords = Array.from(new Set(keywordParts.filter(Boolean))).join(', ');

    this.titleService.setTitle(`${this.package.title} — Golo Holidays`);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ property: 'og:title', content: this.package.title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ property: 'og:url', content: window.location.href });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: this.package.title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });

    // canonical
    try {
      const canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      const url = window.location.href;
      if (canonical) canonical.href = url; else { const link = document.createElement('link'); link.setAttribute('rel', 'canonical'); link.setAttribute('href', url); document.head.appendChild(link); }
    } catch (e) { }

    // remove previous schema
    if (this.jsonLdScript && this.jsonLdScript.parentNode) {
      this.jsonLdScript.parentNode.removeChild(this.jsonLdScript);
      this.jsonLdScript = undefined;
    }

    // BreadcrumbList
    const breadcrumbSchema: any = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: window.location.origin + '/' },
        { '@type': 'ListItem', position: 2, name: 'Packages', item: window.location.origin + '/packages' },
        { '@type': 'ListItem', position: 3, name: this.package.title, item: window.location.href }
      ]
    };

    // Product/Offer-ish schema for package
    const productSchema: any = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: this.package.title,
      description: this.package.shortDescription || '',
      image: (this.package.images && this.package.images.length) ? this.package.images[0] : '/assets/og-image.jpg',
      offers: {
        '@type': 'Offer',
        price: this.package.price?.toString() || '0',
        priceCurrency: 'INR',
        url: window.location.href
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([breadcrumbSchema, productSchema], null, 2);
    document.head.appendChild(script);
    this.jsonLdScript = script;
  }

  ngOnDestroy(): void {
    if (this.jsonLdScript && this.jsonLdScript.parentNode) {
      this.jsonLdScript.parentNode.removeChild(this.jsonLdScript);
      this.jsonLdScript = undefined;
    }
  }


}
