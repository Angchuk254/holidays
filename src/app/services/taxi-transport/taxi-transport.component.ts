import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-taxi-transport',
    imports: [CommonModule, RouterLink],
    templateUrl: './taxi-transport.component.html',
    styleUrl: './taxi-transport.component.scss'
})
export class TaxiTransportComponent {
    vehicles = [
        { type: 'Sedan', capacity: 'Up to 3 pax', perDay: '₹3,000' },
        { type: 'SUV', capacity: 'Up to 5 pax', perDay: '₹4,500' },
        { type: 'Tempo Traveller', capacity: '10–12 pax', perDay: '₹8,000' }
    ];

    faqs = [
        { q: 'Do drivers speak English?', a: 'Most drivers can communicate basic English. For guides we can arrange English-speaking tour managers.' },
        { q: 'Are vehicles kept warm in winter?', a: 'Yes — vehicles have heaters and we advise warm clothing. In extreme cold some services may be limited.' }
    ];

    ngOnInit() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
