import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hotel-booking',
    imports: [CommonModule, RouterLink],
    templateUrl: './hotel-booking.component.html',
    styleUrl: './hotel-booking.component.scss'
})
export class HotelBookingComponent {
    features = [
        'Verified hotels & guesthouses',
        'Flexible check-in/check-out on request',
        'Local experiences & meal plans',
        'Group & family room allocation'
    ];

    faqs = [
        { q: 'Can you arrange early check-in?', a: 'We request early check-in but it depends on hotel availability. We can arrange pre-payment to secure rooms.' },
        { q: 'Do you offer special meals?', a: 'Yes — we can request local vegetarian/non-veg meals and special diets when booking.' }
    ];

    sampleOffers = [
        { label: 'Standard (B&B)', price: '₹4,500' },
        { label: 'Comfort (3★)', price: '₹7,500' },
        { label: 'Premium (4★+)', price: '₹12,000' }
    ];

    ngOnInit() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
