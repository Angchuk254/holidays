import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog.model';
import { CommonModule } from '@angular/common';
import { PackageService } from '../services/package.service';
import { Title, Meta } from '@angular/platform-browser';
import { Package } from '../model/package.model';
import { PromoPopupComponent } from "../promo-popup/promo-popup.component";

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule, RouterLink, PromoPopupComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {
  blog?: Blog;
  recommendedBlogs: Blog[] = [];
  recommendedTours: Package[] = [];
  showCopied = false;
  firstRelatedPackage: string | null = null;

  private jsonLdScript?: HTMLScriptElement;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private packageService: PackageService,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit(): void {
    // Subscribe to route params to react to slug changes
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.loadBlog(slug);
    });
  }

  private loadBlog(slug: string) {
    this.blog = this.blogService.getBlogBySlug(slug);

    // Recommended blogs (excluding current)
    this.recommendedBlogs = this.blogService.getBlogs()
      .filter(b => b.slug !== slug)
      .slice(0, 3);

    // Recommended tours: prefer any relatedPackages specified on the blog
    const allPackages = this.packageService.getPackages();
    const related = (this.blog?.relatedPackages || [])
      .map(slug => allPackages.find(p => p.slug === slug))
      .filter((p): p is Package => !!p);

    // If the blog lists related slugs, use those; otherwise use the first 3 packages
    this.recommendedTours = related.length ? related : allPackages.slice(0, 3);

    // track first related package slug for quick booking link
    this.firstRelatedPackage = (this.blog?.relatedPackages && this.blog.relatedPackages.length) ? this.blog.relatedPackages[0] : null;

    // set meta & schema for the loaded blog
    this.applyMetaAndSchema();

    // Scroll to top whenever a new blog loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private applyMetaAndSchema() {
    if (!this.blog) return;

    // Title + meta tags
    this.titleService.setTitle(`${this.blog.title} — Golo Holidays`);
    this.metaService.updateTag({ name: 'description', content: this.blog.summary || this.blog.shortDescription || '' });
    this.metaService.updateTag({ property: 'og:title', content: this.blog.title });
    this.metaService.updateTag({ property: 'og:description', content: this.blog.summary || this.blog.shortDescription || '' });
    this.metaService.updateTag({ property: 'og:image', content: this.blog.image || '/assets/og-image.jpg' });
    this.metaService.updateTag({ property: 'og:type', content: 'article' });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    // update canonical link
    try {
      const canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      const url = window.location.href;
      if (canonical) {
        canonical.href = url;
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        document.head.appendChild(link);
      }
    } catch (e) { /* ignore */ }

    // remove previous JSON-LD script if existed
    if (this.jsonLdScript && this.jsonLdScript.parentNode) {
      this.jsonLdScript.parentNode.removeChild(this.jsonLdScript);
      this.jsonLdScript = undefined;
    }

    // build Article + BreadcrumbList schema
    const articleSchema: any = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: this.blog.title,
      description: this.blog.summary || this.blog.shortDescription || '',
      image: [this.blog.image || '/assets/og-image.jpg'],
      author: {
        '@type': 'Person',
        name: this.blog.author || 'Golo Holidays'
      },
      datePublished: this.blog.date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': window.location.href
      }
    };

    // breadcrumbs
    const breadcrumbSchema: any = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: window.location.origin + '/' },
        { '@type': 'ListItem', position: 2, name: 'Blogs', item: window.location.origin + '/blogs' },
        { '@type': 'ListItem', position: 3, name: this.blog.title, item: window.location.href }
      ]
    };

    const combined = [articleSchema, breadcrumbSchema];
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(combined, null, 2);
    document.head.appendChild(script);
    this.jsonLdScript = script;
  }

  ngOnDestroy(): void {
    if (this.jsonLdScript && this.jsonLdScript.parentNode) {
      this.jsonLdScript.parentNode.removeChild(this.jsonLdScript);
      this.jsonLdScript = undefined;
    }
  }

  copyLink() {
    try {
      const url = window.location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          this.showCopied = true;
          setTimeout(() => (this.showCopied = false), 2000);
        });
      } else {
        // fallback
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = url;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        this.showCopied = true;
        setTimeout(() => (this.showCopied = false), 2000);
      }
    } catch (e) {
      console.error('Copy failed', e);
    }
  }
}
