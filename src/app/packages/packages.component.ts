import { Component } from '@angular/core';
import { PackageService } from '../services/package.service';
import { Package } from '../model/package.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-packages',
  imports: [CommonModule, RouterLink],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent {
  packages: Package[] = [];

  constructor(private packageService: PackageService) { }

  ngOnInit(): void {
    this.packages = this.packageService.getPackages();
  }
}
