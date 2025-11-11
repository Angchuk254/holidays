// src/app/services/package.service.ts
import { Injectable } from '@angular/core';
import { Package } from '.././model/package.model';


@Injectable({
    providedIn: 'root'
})
export class PackageService {

    private packages: Package[] = [
        {
            id: 1,
            title: 'Ladakh Adventure Trip',
            slug: 'ladakh-adventure-trip',
            shortDescription: 'Explore Ladakh with bike tours, monasteries, and local culture.',
            content: `<p><strong>Overview:</strong> 7-day Ladakh adventure with scenic rides, guided sightseeing, comfortable stays and local experiences. This curated route balances riding days with sightseeing and acclimatisation.</p>
                                            <h5>Trip Snapshot</h5>
                                            <ul>
                                                <li>Duration: 7 Days</li>
                                                <li>Difficulty: Moderate (high altitude)</li>
                                                <li>Meals: Breakfast included</li>
                                                <li>Group size: Small groups (6-12)</li>
                                            </ul>
                                            <h5>Where you'll stay</h5>
                                            <p>Comfortable hotels in Leh, cozy homestays in Nubra and lakeside camps near Pangong (subject to availability).</p>
                                            <h5>Quick itinerary preview</h5>
                                            <p>Arrival in Leh → Nubra Valley via Khardung La → Pangong Lake → Leh sightseeing → Departure.</p>`,
            images: [
                'assets/pangonf.jpeg',
                'assets/bike-ladakh.jpeg',
                'assets/road-ladakh.jpeg'
            ],
            price: 1200,
            duration: '7 Days',
            tags: ['Ladakh', 'Adventure', 'Bike Tour'],
            highlights: [
                'Pangong Lake sunrise',
                'Motorbike-friendly routes',
                'Local monastery visits & cultural evening'
            ],
            itinerary: [
                { day: 1, title: 'Arrival & Acclimatization', details: 'Arrive Leh, transfer to hotel. Evening walk in the local market and light acclimatization. Tip: Rest well and avoid strenuous activity.', image: 'assets/ladakh-main.jpeg' },
                { day: 2, title: 'Leh to Nubra Valley', details: 'Drive via Khardung La (world\'s highest motorable pass), visit Diskit Monastery and Hunder sand dunes. Overnight in Nubra. Meals: Breakfast, Dinner.', image: 'assets/ladakh-bike-tour.jpeg' },
                { day: 3, title: 'Nubra to Pangong', details: 'Drive to Pangong Lake via scenic routes, enjoy lakeside views and sunset photography. Camp near the lake or stay in guesthouse.', image: 'assets/pangong-ladakh.jpeg' },
                { day: 4, title: 'Pangong to Leh', details: 'Return to Leh with stops at scenic viewpoints and local villages. Evening free for shopping.', image: 'assets/road-ladakh.jpeg' },
                { day: 5, title: 'Leh Local Sightseeing', details: 'Visit Hemis, Thiksey and Shey monasteries, followed by Shanti Stupa for panoramic views.', image: 'assets/hemis-monastery.jpeg' },
                { day: 6, title: 'Leisure / Optional Activities', details: 'Optional biking, photography tours, or local cultural evenings. We can arrange bike rentals (extra).', image: 'assets/ladakh-bike.jpeg' },
                { day: 7, title: 'Departure', details: 'Transfer to Leh airport for your onward journey. Bring home memories and photos!', image: 'assets/ladakh-bike-pangong.jpeg' }
            ],
            inclusions: [
                'Accommodation as per itinerary',
                'All transfers & sightseeing (shared coach)',
                'Breakfast daily',
                'Local English-speaking guide for excursions'
            ],
            exclusions: [
                'Flight/train to Leh',
                'Personal expenses & tips',
                'Optional activities and bike rentals',
                'Travel insurance'
            ],
            priceBreakdown: [
                { label: 'Per person (twin share)', amount: 1200 },
                { label: 'Single supplement', amount: 300 }
            ],
            notes: 'Prices are indicative. Final price depends on season and availability.'
        },
        {
            id: 2,
            title: 'Spiti Valley Exploration',
            slug: 'spiti-valley-exploration',
            shortDescription: 'Discover the remote beauty of Spiti Valley with guided trips.',
            content: `<p><strong>Overview:</strong> 6-day Spiti Valley exploration focusing on village cultures, high desert landscapes and easy hikes. Ideal for travelers who want remote experiences.</p>
                                            <h5>Trip Snapshot</h5>
                                            <ul>
                                                <li>Duration: 6 Days</li>
                                                <li>Difficulty: Moderate</li>
                                                <li>Highlights: Kaza, Langza, Pin Valley</li>
                                            </ul>
                                            <h5>Where you'll stay</h5>
                                            <p>Combination of guesthouses and basic hotels in Kaza and nearby villages.</p>`,
            images: [
                'assets/ladakh-carousel.jpeg',
                'assets/pangong-ladakh.jpeg',
                'assets/bikewhile.jpeg'
            ],
            price: 1000,
            duration: '6 Days',
            tags: ['Spiti', 'Adventure', 'Himalaya'],
            highlights: [
                'Komic & Langza villages',
                'Stargazing in high-altitude clear skies',
                'Traditional homestays experience'
            ],
            itinerary: [
                { day: 1, title: 'Arrival & Drive', details: 'Drive from Manali/Shimla towards Spiti, reach first stop and overnight.', image: 'assets/spiti-road.jpeg' },
                { day: 2, title: 'Explore Kaza', details: 'Visit Key Monastery and local market, acclimatize and meet locals.', image: 'assets/kaza.jpeg' },
                { day: 3, title: 'Komic & Langza', details: 'Visit ancient villages, explore fossil sites and enjoy village homestay culture.', image: 'assets/langza.jpeg' },
                { day: 4, title: 'Pin Valley / Local Trails', details: 'Short hikes and optional jeep rides in Pin Valley National Park. Keep your camera ready!', image: 'assets/pin-valley.jpeg' },
                { day: 5, title: 'Return towards Manali', details: 'Start return journey with scenic stops and farewell to Spiti.', image: 'assets/return-spiti.jpeg' },
                { day: 6, title: 'Departure', details: 'Drop at Manali/Shimla for onward travel.', image: 'assets/manali.jpeg' }
            ],
            inclusions: [
                'Accommodation (homestays & hotels)',
                'All ground transfers as per itinerary',
                'Breakfast & 3 major meals where applicable'
            ],
            exclusions: [
                'Flights / long distance travel to start point',
                'Entrance fees & permits',
                'Any extra sightseeing not mentioned'
            ],
            priceBreakdown: [
                { label: 'Per person', amount: 1000 }
            ],
            notes: 'Remote area — expect basic facilities and variable network connectivity.'
        },
        {
            id: 3,
            title: 'Kashmir Scenic Trip',
            slug: 'kashmir-scenic-trip',
            shortDescription: 'Enjoy the lakes, gardens, and mountains of Kashmir with expert guides.',
            content: `<p><strong>Overview:</strong> 5-day Kashmir scenic trip with houseboat stay in Srinagar, a day trip to Gulmarg and a visit to Pahalgam.</p>
                                            <h5>Trip Snapshot</h5>
                                            <ul>
                                                <li>Duration: 5 Days</li>
                                                <li>Difficulty: Easy</li>
                                                <li>Highlights: Dal Lake, Mughal Gardens, Gulmarg</li>
                                            </ul>
                                            <h5>Where you'll stay</h5>
                                            <p>Houseboat in Srinagar and comfortable hotels in Gulmarg/Pahalgam.</p>`,
            images: [
                'assets/kasmir-package.jpeg',
                'assets/kasmeer.jpeg',
                'assets/wildtour.jpeg'
            ],
            price: 1100,
            duration: '5 Days',
            tags: ['Kashmir', 'Nature', 'Sightseeing'],
            highlights: [
                'Srinagar houseboat stay',
                'Gulmarg gondola ride (optional)',
                'Scenic valley drives & gardens'
            ],
            itinerary: [
                { day: 1, title: 'Arrive Srinagar', details: 'Transfer to houseboat, evening shikara ride on Dal Lake and sunset views.', image: 'assets/dal-lake.jpeg' },
                { day: 2, title: 'Srinagar Local', details: 'Visit Mughal Gardens (Shalimar & Nishat), explore local handicraft markets.', image: 'assets/mughal-garden.jpeg' },
                { day: 3, title: 'Gulmarg Day Trip', details: 'Drive to Gulmarg; optional gondola ride and scenic walks.', image: 'assets/gulmarg.jpeg' },
                { day: 4, title: 'Pahalgam Excursion', details: 'Drive to Pahalgam, visit Betaab Valley and river-side walks.', image: 'assets/pahalgam.jpeg' },
                { day: 5, title: 'Departure', details: 'Return to Srinagar and transfer to airport.', image: 'assets/srinagar-airport.jpeg' }
            ],
            inclusions: [
                'Accommodation as per itinerary',
                'Transfers & sightseeing by car',
                'Breakfast included'
            ],
            exclusions: [
                'Flights to Srinagar',
                'Personal expenses, tips and insurance'
            ],
            priceBreakdown: [
                { label: 'Per person (standard)', amount: 1100 }
            ],
            notes: 'Gondola in Gulmarg is seasonal and charged separately.'
        }
    ];

    constructor() { }

    getPackages(): Package[] {
        return this.packages;
    }

    getPackageBySlug(slug: string): Package | undefined {
        return this.packages.find(p => p.slug === slug);
    }
    // New method to get filtered packages




}
