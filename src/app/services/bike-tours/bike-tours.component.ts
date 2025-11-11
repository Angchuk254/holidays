import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-bike-tours',
    imports: [CommonModule, RouterLink],
    templateUrl: './bike-tours.component.html',
    styleUrl: './bike-tours.component.scss'
})
export class BikeToursComponent {
    tourTypes = [
        { title: 'Guided Bike Tour', days: '5–9 Days', details: 'Guided groups with support vehicle and mechanic.' },
        { title: 'Self-Guided Route', days: '3–7 Days', details: 'We provide route maps, GPS tracks and bike rental options.' },
        { title: 'Photography Ride', days: '2–4 Days', details: 'Short rides focusing on sunrise/sunset photography spots.' }
    ];

    safety = [
        'Helmet & protective gear available',
        'Support vehicle & mechanic on request',
        'Local guide familiar with high-altitude routes'
    ];

    faqs = [
        { q: 'What fitness level is required?', a: 'Moderate fitness is recommended; we provide easier options and rest days for acclimatisation.' },
        { q: 'Do you provide bikes and gear?', a: 'Yes — we offer a range of well-maintained bikes, helmets, and basic repair kits for rent.' },
        { q: 'Is support available on long routes?', a: 'A support vehicle and mechanic can accompany guided tours for luggage and mechanical assistance.' }
    ];

    ngOnInit() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
