import { Component } from '@angular/core';
import { Package } from '../model/package.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PackageService } from '../services/package.service';
import { CommonModule } from '@angular/common';
import { PromoPopupComponent } from "../promo-popup/promo-popup.component";

@Component({
  selector: 'app-package-detials',
  imports: [CommonModule, RouterLink, PromoPopupComponent],
  templateUrl: './package-detials.component.html',
  styleUrl: './package-detials.component.scss'
})
export class PackageDetialsComponent {
  package?: Package;
  recommendedPackages: Package[] = [];

  constructor(private route: ActivatedRoute, private packageService: PackageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.loadPackage(slug);
    });
  }

  private loadPackage(slug: string) {
    this.package = this.packageService.getPackageBySlug(slug);
    this.recommendedPackages = this.packageService.getPackages()
      .filter(p => p.slug !== slug)
      .slice(0, 3);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
