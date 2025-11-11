import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-camping-bonfire',
    imports: [CommonModule, RouterLink],
    templateUrl: './camping-bonfire.component.html',
    styleUrl: './camping-bonfire.component.scss'
})
export class CampingBonfireComponent {
    camps = [
        { title: 'Lakeside Camp', features: ['Tents', 'Sleeping bags', 'Bonfire & dinner'] },
        { title: 'Desert Camp', features: ['Traditional camp', 'Bonfire', 'Local music'] }
    ];

    faqs = [
        { q: 'Are tents warm?', a: 'We provide insulated sleeping bags and extra blankets. Tents are suitable for summer and shoulder seasons; winter camping requires special gear.' },
        { q: 'Can we bring our own food?', a: 'Yes — but we recommend using our catering for safety and convenience in remote areas.' }
    ];

    ngOnInit() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
