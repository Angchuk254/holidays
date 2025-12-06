import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageService } from '../services/package.service';
import { Package } from '../model/package.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-packages',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  packages: Package[] = [];
  filteredPackages: Package[] = [];

  // filter state
  regions: string[] = [];
  tourTypes: string[] = [];
  selectedRegion: string | null = null;
  selectedTourType: string | null = null;

  constructor(private packageService: PackageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.packages = this.packageService.getPackages();

    // compute regions and tourTypes from the packages (unique)
    const regionSet = new Set<string>();
    const typeSet = new Set<string>();
    this.packages.forEach(p => {
      (p.tags || []).forEach(t => regionSet.add(t));
      (p.tourTypes || []).forEach(tt => typeSet.add(tt));
    });
    this.regions = Array.from(regionSet).sort();
    this.tourTypes = Array.from(typeSet).sort();

    // Listen for optional query params (e.g. ?region=Ladakh)
    this.route.queryParamMap.subscribe(q => {
      this.selectedRegion = q.get('region');
      this.selectedTourType = q.get('type');
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredPackages = this.packages.filter(p => {
      const regionOk = this.selectedRegion ? (p.tags || []).some(t => t.toLowerCase() === this.selectedRegion!.toLowerCase()) : true;
      const typeOk = this.selectedTourType ? (p.tourTypes || []).some(tt => tt.toLowerCase() === this.selectedTourType!.toLowerCase()) : true;
      return regionOk && typeOk;
    });
  }

  onFilterChange() {
    const qp: any = {};
    if (this.selectedRegion) qp.region = this.selectedRegion;
    if (this.selectedTourType) qp.type = this.selectedTourType;
    this.router.navigate([], { queryParams: qp });
  }

  clearFilters() {
    this.selectedRegion = null;
    this.selectedTourType = null;
    this.onFilterChange();
  }
}
