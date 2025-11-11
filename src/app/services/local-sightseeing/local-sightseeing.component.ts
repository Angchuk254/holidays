import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-local-sightseeing',
    imports: [CommonModule, RouterLink],
    templateUrl: './local-sightseeing.component.html',
    styleUrl: './local-sightseeing.component.scss'
})
export class LocalSightseeingComponent {
    sights = [
        { id: 'hemis', title: 'Hemis Monastery', short: 'One of the largest and wealthiest monasteries in Ladakh.', details: 'Famous for its annual Hemis festival, intricate murals and peaceful courtyards. Great for cultural immersion and photography.', image: '/assets/hemis.jfif' },
        { id: 'thiksey', title: 'Thiksey Monastery', short: 'A beautiful multi-level gompa with panoramic views of the Indus valley.', details: 'Often compared to the Potala Palace, Thiksey houses a large Maitreya Buddha and offers scenic viewpoints at sunrise.', image: '/assets/ladakh-thiksey.jpeg' },
        { id: 'pangong', title: 'Pangong Lake Viewpoint', short: 'The iconic saltwater lake changing colours through the day.', details: 'Best visited at sunrise or sunset. We arrange lakeside walks and photography stops. Note: permits required for some areas.', image: '/assets/pangong-ladakh.jpeg' },
        { id: 'shanti', title: 'Shanti Stupa', short: 'A white-domed stupa built for world peace with 360° views of Leh.', details: 'A short drive from Leh; dawn visits are especially serene. Bring warm layers.', image: '/assets/shanti.jfif' },
        { id: 'nubra', title: 'Diskit & Hunder (Nubra Valley)', short: 'Sand dunes, monasteries and camel rides.', details: 'Experience double-humped Bactrian camels and traditional Nubra hospitality. Ideal for 1–2 day excursions.', image: '/assets/disktnunra.webp' }
    ];

    faqs = [
        { q: 'Do I need permits for Pangong?', a: 'Yes, certain areas require Inner Line Permits. We assist with permit formalities when you book a sightseeing trip with us.' },
        { q: 'Is acclimatisation necessary?', a: 'Yes — ascending slowly and resting at Leh for at least 24 hours is recommended. Avoid strenuous activity on arrival.' },
        { q: 'Are walking tours suitable for children?', a: 'Short gentle walks are fine, but high-altitude conditions may be challenging for very young children.' }
    ];

    gallery = ['/assets/ladakh-bike-pangong.jpeg', '/assets/culture-femlae.jpeg', '/assets/osrich-ladakh.jpeg', '/assets/pangong-ladakh.jpeg'];

    relatedPackages = [
        { title: 'Ladakh Adventure Trip', slug: 'ladakh-adventure-trip', image: '/assets/ladakh.jpeg', short: '7-day curated route covering Leh, Nubra and Pangong.' },
        { title: 'Kashmir Scenic Trip', slug: 'kashmir-scenic-trip', image: '/assets/kasmir-package.jpeg', short: 'Houseboat stays and valley drives.' }
    ];

    ngOnInit() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
