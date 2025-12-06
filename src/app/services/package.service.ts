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
                                                <li>Duration: 5 Days & 6 Days</li>
                                                <li>Difficulty: Moderate (high altitude)</li>
                                                <li>Meals: Breakfast included</li>
                                                <li>Group size: Medium groups min(15-20)</li>
                                            </ul>
                                            <h5>Where you'll stay</h5>
                                            <p>Comfortable hotels in Leh, cozy homestays in Nubra and lakeside camps near Pangong (subject to availability).</p>
                                            <h5>Quick itinerary preview</h5>
                                            <p>Arrival in Leh → Sight Seeing → Nubra Valley via Khardung La → Nubra Valley to Pangong  → Pangong  to Leh  → Departure.</p>`,
            bike: `<div class="table-container">  <table class="modern-table"> <thead> <tr> <th>S.NO</th> <th>Bike</th> <th>Price / Pax</th> </tr> </thead> <tbody> <tr> <td>01</td> <td>Own Bike</td> <td>10,500/-</td> </tr> <tr> <td>02</td> <td>Standard 500 CC Dual</td> <td>13,500/-</td> </tr> <tr> <td>03</td> <td>Himalayan 411 CC Dual</td> <td>15,500/-</td> </tr> <tr> <td>04</td> <td>Standard 500 CC Solo</td> <td>17,500/-</td> </tr> <tr> <td>05</td> <td>Himalayan 411 CC Solo</td> <td>19,500/-</td> </tr> </tbody> </table> </div> `,
            images: [
                'assets/pangonf.jpeg',
                'assets/bike-ladakh.jpeg',
                'assets/road-ladakh.jpeg'
            ],
            price: 1200,
            duration: '5 Days & 6 Days',
            tags: ['Ladakh', 'Adventure', 'Bike Tour'],
            highlights: [
                'Pangong Lake sunrise',
                'Motorbike-friendly routes',
                'Local monastery visits & cultural evening'
            ],
            itinerary: [
                { day: 1, title: 'Arrival & Acclimatization', details: 'Airport pick up and transfer to hotel, rest till afternoon for the acclimatization and in the evening visit shanti stupa, leh palace and leh market. overnight at hotel.', image: 'assets/ladakh-main.jpeg' },
                { day: 2, title: 'LOCAL SIGHTSEEING SANGHAM-PATHAR SAHIB-MAGNATIC HILL-HALL OF FAME', details: 'After breakfast you will  meet with our staff, today we explore towards the western part of Ladakh in route we will visit hall of fame 4 kms from leh town ( famous museum run by a indian army), after this procced towards pathar sahib which is 27 kms from leh (sacred place for sikh magnactic hill and then finally towards sangham ( confluence of Indus river and Zanskar river which is approx 40 kms from leh and then back to leh. overnight at hotel.', image: 'assets/ladakh-bike-tour.jpeg' },
                { day: 3, title: 'LEH TO NUBRA VALLEY VIA KHARDONG LA PASS (128 KMS)', details: 'After breakfast drive to Nubra valley via Khardong pass (highest motorable road in the world 18,380fts ). Arrive Hunder in the evening inroute visit Disket monastery and open statue of Maitreya buddha( a future buddha)on the way enjoy landscape always, Nubra valley was very popular for the Silk route trade, as they used this valley which connected western world with central Asia, even you can find the double hump camel in this area if you want you can ride a camel in Hunder sand dunes. Overnight at camp/ hotel .', image: 'assets/pangong-ladakh.jpeg' },
                { day: 4, title: 'NUBRA VALLEY TO PANGONG LAKE ( 170 KMS )', details: 'After breakfast drive to Pangong lake 4300 mtrs one of the beautiful lake drive through Shayok valley, and for today its better to leave early like around 9 am, so we can easily do water crossing on the way before the waterlevel become high. Passing through many villages changing the landscape always, reach in the evening at Pangong, stay at shooting point for the view and pictures then drive to camp. Overnight at camp.', image: 'assets/road-ladakh.jpeg' },
                { day: 5, title: 'PANGONG LAKE TO LEH VIA CHANGLA PASS (150 KMS )', details: 'The final day of drive  to leh crossing a chang la pass 5350 mtrs ( world 3st highest motorable road) enjoying the beautiful landscape and view of sakti village while getting down from the top. Over night at hotel.', image: 'assets/hemis-monastery.jpeg' },
                { day: 6, title: 'FINAL DAY OF TRIP', details: 'Early morning today the car will be wait for outside for the departure towards your home and after breakfast drive to airport and then fly back to home with sweet memories.', image: 'assets/ladakh-bike.jpeg' },

            ],
            inclusions: [
                'Hotels/ Camps/Cottage',
                'Medical Kit',
                'Breakfast daily',
                'Dinner',
                'Permits',
                'Airport Drop',
                'Oxygen Cylinder',
                'Bike',
                'Fuel',
                'Triple Sharing ',
                'Marshal',
                'Backup Car',
                'Mechanic'
            ],
            exclusions: [
                'Any domestic or international airfare and airport taxes.',
                'Any kind of insurance (for example travel, health, life, rescue, repatriation).',
                'Camel ride safari at Hunder.',
                'Lunch and table snacks.',
                'Entrance fees to monasteries, monuments, museums.',
                'Tips to guide, driver, hotel staff etc.',
                'Any type of personal expenses.',
                'Any unforeseen expenses due to events beyond our control such as natural calamity, landslide, road block, flight cancellation, strike, hike in Tax structure, hotel and transportation rates.',
                '*Anything not specifically mentioned under “service included.'
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
            bike: ``,
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
            bike: ``,
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
        ,
        // --- Additional Ladakh packages
        {
            id: 4,
            title: 'Ladakh Photography Escape',
            slug: 'ladakh-photography-escape',
            shortDescription: 'Focused photography itinerary for sunrise/sunset and night-sky sessions.',
            content: `<p><strong>Overview:</strong> 5-day photography-focused trip visiting Pangong, Shanti Stupa, Nubra viewpoints and remote vantage points chosen for epic golden hours and night skies.</p>
                      <h5>Who is this for</h5>
                      <p>Photographers and enthusiasts who want carefully timed visits for the best light.</p>`,
            images: ['assets/pangong-ladakh.jpeg', 'assets/ladakh-bike-pangong.jpeg', 'assets/ladakh-main.jpeg'],
            price: 1400,
            duration: '5 Days',
            tags: ['Ladakh', 'Photography', 'Short Trip'],
            tourTypes: ['Photography', 'Short Break'],
            highlights: ['Sunrise at Pangong', 'Night sky & milky way viewing', 'Golden-hour vistas'],
            itinerary: [
                { day: 1, title: 'Arrival & Sunset', details: 'Arrive Leh, short walk, and sunset photography at nearby viewpoints.', image: 'assets/ladakh-main.jpeg' },
                { day: 2, title: 'Shanti Stupa & Leh market', details: 'Early morning at Shanti Stupa, evening markets and local details shoot.', image: 'assets/shanti.jfif' },
                { day: 3, title: 'Pangong Lake', details: 'All-day at Pangong with sunrise and sunset sessions, set up for long-exposure night shots.', image: 'assets/pangong-ladakh.jpeg' },
                { day: 4, title: 'Nubra viewpoint & dunes', details: 'Photo ops at Hunder dunes and Diskit monastery, caravan and camel motifs.', image: 'assets/disktnunra.webp' },
                { day: 5, title: 'Return & departure', details: 'Final shots in Leh and departure.', image: 'assets/road-ladakh.jpeg' }
            ],
            inclusions: ['Accommodation', 'Ground transport for photography stops', 'Guided shoot locations'],
            exclusions: ['Camera equipment', 'Extra memory cards', 'Flight tickets'],
            priceBreakdown: [{ label: 'Per person', amount: 1400 }],
            notes: 'Small-group format — bring a tripod and extra batteries.',
            bike: ``,
        },
        {
            id: 5,
            title: 'Ladakh Family Retreat',
            slug: 'ladakh-family-retreat',
            shortDescription: 'A relaxed family-friendly itinerary with shorter drives and comfortable stays.',
            content: `<p><strong>Overview:</strong> 6-day Ladakh family trip designed for seniors and kids — shorter drives, comfortable hotels and gentle sightseeing.</p>`,
            images: ['assets/adv-kashmir.jpeg', 'assets/ladakh-main.jpeg', 'assets/ladakh-bike.jpeg'],
            price: 1500,
            duration: '6 Days',
            tags: ['Ladakh', 'Family', 'Relaxed'],
            tourTypes: ['Family', 'Comfort'],
            highlights: ['Short drives', 'Family-friendly stays', 'Cultural evenings'],
            itinerary: [
                { day: 1, details: 'Arrive Leh and settle in — light local walk and gentle acclimatisation.' },
                { day: 2, details: 'Leh local sightseeing with shorter walking distances and a cultural evening.' },
                { day: 3, details: 'Drive to Nubra via Khardung La with rest stops and scenic short walks.' },
                { day: 4, details: 'Nubra valley activities — sand-dune fun and village visit.' },
                { day: 5, details: 'Pangong lake visit with lakeside stay.' },
                { day: 6, details: 'Return to Leh & departure.' }
            ],
            bike: ``,
            inclusions: ['Hotels', 'Family-friendly transfers', 'Meals (breakfast & 2 dinners)'],
            exclusions: ['Flights', 'Personal expenses'],
            priceBreakdown: [{ label: 'Per family (2 adults + 1 child)', amount: 4500 }],
            notes: 'Suitable for all ages, child-specific bedding and menu available on request.'
        },

        // --- Additional Spiti packages
        {
            id: 6,
            title: 'Spiti Compact Escape',
            slug: 'spiti-compact-escape',
            shortDescription: '4-day compact Spiti experience for travelers short on time.',
            content: `<p><strong>Overview:</strong> A quick 4-day trip focusing on Kaza and nearby highlights — perfect as an add-on to a Leh trip or short adventure.</p>`,
            images: ['assets/spiti-ladakh.jpeg', 'assets/spiti-tour.jpeg'],
            price: 750,
            duration: '4 Days',
            tags: ['Spiti', 'Compact', 'Short Trip'],
            tourTypes: ['Short', 'Culture'],
            highlights: ['Kaza highlights', 'Minimal driving', 'Village homestays'],
            itinerary: [
                { day: 1, title: 'Arrival & settle', details: 'Arrive in Kaza and get used to altitude.' },
                { day: 2, title: 'Key Monastery', details: 'Visit Key Monastery and local sights.' },
                { day: 3, title: 'Langza & Komic', details: 'Fossil sites and village visits.' },
                { day: 4, title: 'Return & depart', details: 'Depart from Kaza.' }
            ],
            inclusions: ['Accommodations', 'Local transport', 'Guided sightseeing'],
            exclusions: ['Meals not listed', 'Personal expenses'],
            priceBreakdown: [{ label: 'Per person', amount: 750 }],
            notes: 'Best during the warmer months; roads may be slow.',
            bike: ``,
        },
        {
            id: 7,
            title: 'Spiti Cultural Retreat',
            slug: 'spiti-cultural-retreat',
            shortDescription: 'A 7-day cultural immersion with homestays, local food and village interactions.',
            content: `<p><strong>Overview:</strong> 7-day cultural trip emphasizing homestays, monastery visits and village stays — ideal for those who want to connect with local life.</p>`,
            images: ['assets/culture-femlae.jpeg', 'assets/langza.jpeg', 'assets/pin-valley.jpeg'],
            price: 1250,
            duration: '7 Days',
            tags: ['Spiti', 'Culture', 'Homestay'],
            tourTypes: ['Culture', 'Homestay'],
            highlights: ['Authentic homestays', 'Intimate local experiences', 'Off-the-path trails'],
            itinerary: [
                { day: 1, details: 'Arrival and village introduction.' },
                { day: 2, details: 'Kaza cultural day with markets and monastery.' },
                { day: 3, details: 'Langza & Komic – village stays.' },
                { day: 4, details: 'Pin Valley – nature and quieter treks.' },
                { day: 5, details: 'Local craft sessions and community visits.' },
                { day: 6, details: 'Rest day and optional short walks.' },
                { day: 7, details: 'Return and departure.' }
            ],
            inclusions: ['Homestays', 'Meals (breakfast & 2 dinners)', 'Local guide'],
            exclusions: ['Personal purchases', 'Travel insurance'],
            priceBreakdown: [{ label: 'Per person', amount: 1250 }],
            notes: 'Perfect for travellers who value community-led experiences.',
            bike: ``,
        },

        // --- Additional Kashmir packages
        {
            id: 8,
            title: 'Kashmir Houseboat & Valleys',
            slug: 'kashmir-houseboat-special',
            shortDescription: '5-day comfortable trip focused on Srinagar houseboat stay and valley drives.',
            content: `<p><strong>Overview:</strong> Houseboat experience combined with Gulmarg and Pahalgam day-trips — an ideal introduction to Kashmir comfort stays.</p>`,
            images: ['assets/kasmir-package.jpeg', 'assets/kashmir-valley.jpeg'],
            price: 1250,
            duration: '5 Days',
            tags: ['Kashmir', 'Houseboat', 'Comfort'],
            tourTypes: ['Comfort', 'Romantic'],
            highlights: ['Houseboat stay', 'Shikara ride', 'Gulmarg gondola (seasonal)'],
            itinerary: [
                { day: 1, title: 'Arrive & Houseboat', details: 'Welcome on a houseboat and enjoy an evening shikara ride.' },
                { day: 2, title: 'Mughal gardens', details: 'Visit Shalimar and Nishat gardens and old city areas.' },
                { day: 3, title: 'Gulmarg daytrip', details: 'Optional gondola ride and easy walks.' },
                { day: 4, title: 'Pahalgam daytrip', details: 'River valley walks and local markets.' },
                { day: 5, title: 'Departure', details: 'Transfer to the airport.' }
            ],
            inclusions: ['Houseboat night', 'Day-trip transfers', 'Breakfast included'],
            exclusions: ['Gondola fees', 'Flights'],
            priceBreakdown: [{ label: 'Per person', amount: 1250 }],
            notes: 'Gondola at Gulmarg is optional and payable separately.',
            bike: ``,
        },
        {
            id: 9,
            title: 'Kashmir Winter Wonder',
            slug: 'kashmir-winter-wonder',
            shortDescription: 'A winter-focused Kashmir trip for snow scenery and cozy stays.',
            content: `<p><strong>Overview:</strong> 4-day winter escape featuring snowy landscapes, warm stays and easy snow activities in Gulmarg.</p>`,
            images: ['assets/winter-kashmir.jpeg', 'assets/kashmir.jpeg'],
            price: 1350,
            duration: '4 Days',
            tags: ['Kashmir', 'Winter', 'Snow'],
            tourTypes: ['Winter', 'Snow Activities'],
            highlights: ['Snow scenes', 'Cozy houseboats', 'Gulmarg snow play'],
            itinerary: [
                { day: 1, details: 'Arrive and settle in houseboat, short city stroll.' },
                { day: 2, details: 'Gulmarg snow activities & short walks.' },
                { day: 3, details: 'Pahalgam gentle valley walks (if accessible).' },
                { day: 4, details: 'Departure.' }
            ],
            inclusions: ['Accommodation', 'Transfers', 'Breakfasts'],
            exclusions: ['Gondola/ski gear', 'Personal insurance'],
            priceBreakdown: [{ label: 'Per person', amount: 1350 }],
            notes: 'Winter conditions can be severe — pack warm clothing and check local advisories.',
            bike: ``,
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
