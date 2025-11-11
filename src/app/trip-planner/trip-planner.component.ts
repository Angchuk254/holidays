import { Component } from '@angular/core';
import { PackageService } from '../services/package.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trip-planner',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './trip-planner.component.html',
  styleUrl: './trip-planner.component.scss'
})
export class TripPlannerComponent {
  durationOptions = ['3-5 days', '6-9 days', '10+ days'];
  budgetOptions = ['₹10k-₹20k', '₹20k-₹40k', '₹40k+'];
  activitiesOptions = ['Bike Ride', 'Cultural Tour', 'Camping', 'Trek', 'Sightseeing'];
  groupOptions = ['Solo', 'Couple', 'Friends', 'Family'];

  selectedDuration = '';
  selectedBudget = '';
  selectedActivities: string[] = [];
  selectedGroup = '';

  suggestedPackages: any[] = [];

  constructor(private packageService: PackageService) { }

  ngOnInit(): void { }

  onSubmit() {
    // Convert budget to numeric range
    let minBudget = 0, maxBudget = Infinity;
    if (this.selectedBudget === '₹10k-₹20k') { minBudget = 10000; maxBudget = 20000; }
    if (this.selectedBudget === '₹20k-₹40k') { minBudget = 20001; maxBudget = 40000; }
    if (this.selectedBudget === '₹40k+') { minBudget = 40001; maxBudget = Infinity; }

    // Convert duration to numeric days
    let minDays = 0, maxDays = Infinity;
    if (this.selectedDuration === '3-5 days') { minDays = 3; maxDays = 5; }
    if (this.selectedDuration === '6-9 days') { minDays = 6; maxDays = 9; }
    if (this.selectedDuration === '10+ days') { minDays = 10; maxDays = Infinity; }


  }
}
