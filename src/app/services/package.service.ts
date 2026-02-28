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
            content: `<p><strong>Overview:</strong> 7-day Ladakh adventure with scenic rides, guided sightseeing, comfortable stays and local experiences. This curated route balances riding days with sightseeing, trekking moments and acclimatization.</p>
                                            <h5>Trip Snapshot</h5>
                                            <ul>
                                                <li>Duration: 5 Nights & 6 Days</li>
                                                <li>Difficulty: Moderate (high altitude)</li>
                                                <li>Meals: Breakfast included</li>
                                                <li>Group size: Medium groups (15-20)</li>
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
            duration: '5 Nights & 6 Days',
            tags: ['Ladakh', 'Adventure', 'Bike Tour', 'Nubra', 'Pangong'],
            tourTypes: ['Bike Tour', 'Adventure', 'Ladakh Trip'],
            highlights: [
                'Pangong Lake sunrise',
                'Motorbike-friendly routes',
                'Local monastery visits & cultural evening'
            ],
            itinerary: [
                { day: 1, title: 'Arrival & Acclimatization', details: 'Airport pick up and transfer to hotel, rest till afternoon for the acclimatization and in the evening visit shanti stupa, leh palace and leh market. overnight at hotel.', image: 'assets/ladakh-main.jpeg' },
                { day: 2, title: 'LOCAL SIGHTSEEING: SANGAM - PATHAR SAHIB - MAGNETIC HILL - HALL OF FAME', details: 'After breakfast you will meet our staff. Today we explore the western part of Ladakh. En route we visit the Hall of Fame (museum run by the Indian Army), then proceed to Pathar Sahib (a sacred Sikh site), Magnetic Hill, and finally Sangam (the confluence of the Indus and Zanskar rivers, around 40 km from Leh). Return to Leh for overnight stay.', image: 'assets/ladakh-bike-tour.jpeg' },
                { day: 3, title: 'LEH TO NUBRA VALLEY VIA KHARDUNG LA PASS (128 KM)', details: 'After breakfast drive to Nubra Valley via Khardung La Pass (one of the highest motorable roads in the world at 18,380 ft). Arrive in Hunder in the evening. En route visit Diskit Monastery and the Maitreya Buddha statue. Nubra Valley was a key Silk Route corridor, and you can see double-humped Bactrian camels in Hunder sand dunes. Overnight at camp/hotel.', image: 'assets/pangong-ladakh.jpeg' },
                { day: 4, title: 'NUBRA VALLEY TO PANGONG LAKE (170 KM)', details: 'After breakfast drive to Pangong Lake (4,300 m) via the Shyok Valley. Start early (around 9 am) to cross seasonal water crossings before the water level rises. Pass through changing landscapes and villages, reach Pangong by evening, stop at the shooting point for photos, then head to the camp. Overnight at camp.', image: 'assets/road-ladakh.jpeg' },
                { day: 5, title: 'PANGONG LAKE TO LEH VIA CHANGLA PASS (150 KM)', details: 'Drive back to Leh via Chang La Pass (5,350 m), one of the world’s highest motorable roads. Enjoy panoramic views of the mountains and Sakti village while descending. Overnight at hotel.', image: 'assets/hemis-monastery.jpeg' },
                { day: 6, title: 'DEPARTURE', details: 'Early morning transfer to the airport after breakfast. Fly back home with sweet memories of Ladakh.', image: 'assets/ladakh-bike.jpeg' },

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
            tags: ['Spiti',],
            tourTypes: ['Adventure', 'Culture'],
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
            tags: ['Kashmir',  ],
            tourTypes: ['Sightseeing',],
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
        // {
        //     id: 4,
        //     title: 'Ladakh Photography Escape',
        //     slug: 'ladakh-photography-escape',
        //     shortDescription: 'Focused photography itinerary for sunrise/sunset and night-sky sessions.',
        //     content: `<p><strong>Overview:</strong> 5-day photography-focused trip visiting Pangong, Shanti Stupa, Nubra viewpoints and remote vantage points chosen for epic golden hours and night skies.</p>
        //               <h5>Who is this for</h5>
        //               <p>Photographers and enthusiasts who want carefully timed visits for the best light.</p>`,
        //     images: ['assets/pangong-ladakh.jpeg', 'assets/ladakh-bike-pangong.jpeg', 'assets/ladakh-main.jpeg'],
        //     price: 1400,
        //     duration: '5 Days',
        //     tags: ['Ladakh', 'Photography', 'Short Trip'],
        //     tourTypes: ['Photography', 'Short Break'],
        //     highlights: ['Sunrise at Pangong', 'Night sky & milky way viewing', 'Golden-hour vistas'],
        //     itinerary: [
        //         { day: 1, title: 'Arrival & Sunset', details: 'Arrive Leh, short walk, and sunset photography at nearby viewpoints.', image: 'assets/ladakh-main.jpeg' },
        //         { day: 2, title: 'Shanti Stupa & Leh market', details: 'Early morning at Shanti Stupa, evening markets and local details shoot.', image: 'assets/shanti.jfif' },
        //         { day: 3, title: 'Pangong Lake', details: 'All-day at Pangong with sunrise and sunset sessions, set up for long-exposure night shots.', image: 'assets/pangong-ladakh.jpeg' },
        //         { day: 4, title: 'Nubra viewpoint & dunes', details: 'Photo ops at Hunder dunes and Diskit monastery, caravan and camel motifs.', image: 'assets/disktnunra.webp' },
        //         { day: 5, title: 'Return & departure', details: 'Final shots in Leh and departure.', image: 'assets/road-ladakh.jpeg' }
        //     ],
        //     inclusions: ['Accommodation', 'Ground transport for photography stops', 'Guided shoot locations'],
        //     exclusions: ['Camera equipment', 'Extra memory cards', 'Flight tickets'],
        //     priceBreakdown: [{ label: 'Per person', amount: 1400 }],
        //     notes: 'Small-group format — bring a tripod and extra batteries.',
        //     bike: ``,
        // },
        {
            id: 5,
            title: 'Leh Nubra Pangong Bike Tour',
            slug: 'leh-nubra-pangong-bike-tour',
            shortDescription: 'A bike tour you should never miss in Ladakh.',
            content: `<p><strong>Overview:</strong> A Ladakh bike trip is the ultimate adventure, where every turn reveals raw mountains, endless roads, and breathtaking high passes. Riding through remote valleys, crystal-clear lakes, and dramatic landscapes tests your limits while filling your soul with freedom and thrill. It’s not just a journey across Ladakh—it’s a journey within, leaving you with stories, strength, and memories that last a lifetime.</p>`,
            images: ['assets/bikker445.jpeg', 'assets/ladakh-main.jpeg', 'assets/ladakh-bike.jpeg'],
            price: 1500,
            duration: '7 Nights & 8 Days',
            tags: ['Ladakh',  'Nubra', 'Pangong', ],
            tourTypes: ['Bike Tour', 'Adventure', 'Ladakh Trip'],
            highlights: ['Ladakh', 'Family-friendly stays', 'Bike trip'],
            itinerary: [
                { day: 1, title: 'Arrival ', details: 'Upon arrival at Leh, a full day of complete rest is recommended for proper acclimatization, with minimal movement limited to a maximum of 15 minutes of driving; guests will be transferred to their hotels for comfortable accommodation, and meals included on the arrival day will be dinner only.' },
                { day: 2, title: 'Leh to Nubra', details: 'Khardung La is considered one of the highest motorable roads in the world and is a highlight of any Ladakh journey. Ladakh is also the only place in India where you can see double-humped camels, found in Hunder village, where this rare species is known as the Bactrian camel. Another major attraction is the 108-feet-tall statue of Maitreya Buddha, who is prophesied to be the next Buddha to appear in this world. Visitors can also enjoy an adventurous ATV ride amid the unique desert landscape of Nubra Valley.' },
                { day: 3, title: 'Nubra to Turtuk', details: 'Ride to Turtuk, the last Indian village before the Pakistan-controlled Gilgit-Baltistan (PoK) region, where you will experience the unique Balti culture that is distinct from the rest of Ladakh and explore the charming beauty of Turtuk village; we will also visit Turtuk Zero Point, offering views toward Pakistan, before returning to Nubra by evening for an overnight stay in Nubra Valley.' },
                { day: 4, title: 'Turtuk to Pangong', details: 'After breakfast, we head toward Pangong Lake via the scenic Shyok route, reaching the mesmerizing lake known for its ever-changing colors ranging from blue and green to red; stretching about 134 km in length and nearly 5 km in width, Pangong Lake lies one-third in India and two-thirds in China, and we also visit iconic spots featured in Bollywood movies like 3 Idiots, before an overnight stay at Pangong.' },
                { day: 5, title: 'Pangong to Hanle', details: 'After breakfast, we proceed toward Hanle, a place renowned for its crystal-clear skies, stunning natural beauty, and the Indian Astronomical Observatory; along the way we cover the historic Rezang La War Memorial and cross Tsaga La Pass before reaching Hanle by evening for an overnight stay in Hanle.' },
                { day: 6, title: 'Hanle to Umling La', details: 'After breakfast, we head toward Umling La, one of the highest motorable roads in the world, spending some time at this extreme high-altitude pass before continuing to Demchok, a village in Ladakh through which the Line of Actual Control (LAC) runs, and then returning to Hanle for an overnight stay.' },
                { day: 7, title: 'Hanle to Leh', details: 'After breakfast, we head toward Leh via Chumathang, a place famous for its natural hot springs, and en route we visit the beautiful Thiksey Monastery before reaching Leh for an overnight stay.' },
                { day: 8, title: 'Departure', details: 'After breakfast, check out from the hotel as the taxi will be ready for transfer to the airport, a short 15-minute drive, marking the time to say goodbye to Ladakh while carrying back sweet and unforgettable memories.' }
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
            tags: ['Spiti', ],
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
            tags: ['Spiti',  ],
            tourTypes: ['Culture', ],
            highlights: ['Authentic homestays', 'Intimate local experiences', 'Off-the-path trails'],
            itinerary: [
                { day: 1, title: 'Arrival & village intro', details: 'Arrival and village introduction.' },
                { day: 2, title: 'Kaza culture day', details: 'Kaza cultural day with markets and monastery.' },
                { day: 3, title: 'Langza & Komic', details: 'Langza & Komic – village stays.' },
                { day: 4, title: 'Pin Valley', details: 'Pin Valley – nature and quieter treks.' },
                { day: 5, title: 'Local crafts', details: 'Local craft sessions and community visits.' },
                { day: 6, title: 'Rest & walks', details: 'Rest day and optional short walks.' },
                { day: 7, title: 'Return & departure', details: 'Return and departure.' }
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
            tags: ['Kashmir' ],
            tourTypes: [ 'Romantic'],
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
            tags: ['Kashmir',],
            tourTypes: [ 'Snow Activities'],
            highlights: ['Snow scenes', 'Cozy houseboats', 'Gulmarg snow play'],
            itinerary: [
                { day: 1, title: 'Arrive & settle', details: 'Arrive and settle in houseboat, short city stroll.' },
                { day: 2, title: 'Gulmarg snow day', details: 'Gulmarg snow activities & short walks.' },
                { day: 3, title: 'Pahalgam valley', details: 'Pahalgam gentle valley walks (if accessible).' },
                { day: 4, title: 'Departure', details: 'Departure.' }
            ],
            inclusions: ['Accommodation', 'Transfers', 'Breakfasts'],
            exclusions: ['Gondola/ski gear', 'Personal insurance'],
            priceBreakdown: [{ label: 'Per person', amount: 1350 }],
            notes: 'Winter conditions can be severe — pack warm clothing and check local advisories.',
            bike: ``,
        },
        {
            id: 10,
            title: 'Ladakh Bike Expedition Siachen',
            slug: 'ladakh-bike-expedition-siachen',
            shortDescription: 'Ride where only the fearless dare go.',
            content: `<p><strong>Overview:</strong> Discover the breathtaking beauty of Ladakh with Golo Holidays, your trusted travel partner in the
land of high passes. We specialize in bike tours, sightseeing adventures, comfortable stays, authentic
Ladakhi cuisine, local experiences, and hassle-free taxi services — all crafted to give you the true
essence of the Himalayas.
Whether you’re chasing the thrill of rugged mountain rides, exploring serene monasteries, or simply
soaking in the tranquil vibes of Ladakh’s valleys, Golo Holidays ensures every moment becomes an
unforgettable memory.</p>
                                            <h5>Trip Snapshot</h5>
                                            <ul>
                                                <li>Duration: 7 Nights & 8 Days</li>
                                                <li>Difficulty: Moderate (high altitude)</li>
                                                <li>Meals: Breakfast included</li>
                                                <li>Group size: Medium groups min(15-20)</li>
                                            </ul>
                                            <h5>Where you'll stay</h5>
                                            <p>Comfortable hotels in Leh, cozy homestays in Nubra and lakeside camps near Pangong (subject to availability).</p>
                                            <h5>Quick itinerary preview</h5>
                                            <p>Arrival in Leh → Sightseeing → Hunder → Siachen → Pangong → Hanle → Leh → Departure.</p>`,
            bike: `<div class="table-container">  <table class="modern-table"> <thead> <tr> <th>S.NO</th> <th>Bike</th> <th>Price / Pax</th> </tr> </thead> <tbody> <tr> <td>01</td> <td>Own Bike</td> <td>10,500/-</td> </tr> <tr> <td>02</td> <td>Standard 500 CC Dual</td> <td>13,500/-</td> </tr> <tr> <td>03</td> <td>Himalayan 411 CC Dual</td> <td>15,500/-</td> </tr> <tr> <td>04</td> <td>Standard 500 CC Solo</td> <td>17,500/-</td> </tr> <tr> <td>05</td> <td>Himalayan 411 CC Solo</td> <td>19,500/-</td> </tr> </tbody> </table> </div> `,
            images: [
                'assets/bikker.jpeg',
                'assets/bikker3.jpeg',
                'assets/bike5.jpeg'
            ],
            price: 1200,
            duration: '7 Nights & 8 Days',
            tags: ['Ladakh',  ],
            tourTypes: [ 'Ladakh Expedition'],
            highlights: [
                'Pangong Lake sunrise',
                'Motorbike-friendly routes',
                'Local monastery visits & cultural evening', 'Siachen'
            ],
            itinerary: [
                { day: 1, title: 'Arrival & Acclimatization', details: 'Arrival at Leh Airport followed by transfer to the hotel or guest house, where the day is kept light with complete rest for proper acclimatization to the high altitude. If comfortable, a short walk around the nearby area can be taken to gently adjust to the surroundings. In the evening, there will be a detailed briefing about the upcoming bike trip, including route plans and essential safety guidelines, before settling in for an overnight stay in Leh.', image: 'assets/ladakh-main.jpeg' },
                { day: 2, title: 'LOCAL SIGHTSEEING ', details: 'After breakfast at the hotel, proceed for local sightseeing in and around Leh, covering major attractions such as Shanti Stupa, Leh Palace, the Hall of Fame (Indian Army Museum), Magnetic Hill, Gurudwara Pathar Sahib, and the Sangam at the Indus–Zanskar confluence. Return to Leh by evening, followed by bike check and preparation for the next day’s ride, and conclude the day with an overnight stay in Leh.', image: 'assets/ladakh-bike-tour.jpeg' },
                { day: 3, title: 'Leh to Hunder (Nubra Valley)', details: 'Early morning departure after breakfast, riding via the iconic Khardung La Pass, one of the highest motorable roads in the world, followed by a scenic journey towards Nubra Valley. If time permits, visit the Diskit Monastery before reaching Hunder to explore the famous cold desert sand dunes, with an option to enjoy a ride on the double-humped Bactrian camels, and end the day with an overnight stay in Hunder.', image: 'assets/pangong-ladakh.jpeg' },
                { day: 4, title: 'Hunder to Siachen Base Camp – Sumur', details: 'After breakfast at the camp, ride towards the Siachen Base Camp and visit the Siachen War Memorial (subject to permission), paying tribute to the brave Indian soldiers. Continue the ride towards Sumur in the Nubra region, where the evening is reserved for rest and interaction with locals, followed by an overnight stay in Sumur.', image: 'assets/road-ladakh.jpeg' },
                { day: 5, title: 'Sumur to Pangong Lake', details: 'After an early breakfast, set off on a ride through remote and scenic mountain routes, crossing high-altitude passes along the way before reaching the iconic Pangong Lake. Spend time enjoying the lake’s mesmerizing changing colors, with ample opportunity for photography and leisure, and conclude the day with an overnight stay near Pangong Lake', image: 'assets/hemis-monastery.jpeg' },
                { day: 6, title: 'Pangong to Hanle via Demchok', details: 'Early morning departure for a ride towards Hanle via the remote Demchok border region, witnessing untouched landscapes and vast high-altitude plains along the way while crossing the spectacular Umling La Pass. On arrival, visit Hanle village and explore the renowned Hanle Observatory, one of the world’s highest observatories, before settling in for an overnight stay in Hanle.', image: 'assets/ladakh-bike.jpeg' },
                { day: 7, title: 'Hanle to Leh', details: 'After breakfast at the homestay or camp, begin a scenic ride back to Leh, passing through the vast and breathtaking Changthang Plateau. Arrive in Leh by evening, with free time for shopping and relaxation, followed by a farewell dinner, and conclude the journey with an overnight stay in Leh.', image: '' },
                { day: 8, title: 'Departure from Leh', details: 'After an early breakfast, transfer to Leh Airport for departure, marking the conclusion of the tour with unforgettable memories of Siachen – the Land of the Brave.', image: '' }

            ],
            inclusions: [
                'RE Himalayan 411 Bike with Fuel',
                // 'Medical Kit',
                'One Bonfire in a trip',
                'Helmets for Rider and Pillion',
                'Permits',
                'Airport Pick Up & Drop',
                'Oxygen Cylinder',
                // 'Bike',
                'Fuel',
                'Triple Sharing ',
                'Marshal',
                'Backup Car',
                'Mechanic',
                // 'Backup Vehicle for Luggage'
            ],
            exclusions: [
                'Lunch',
                '5% GST',
                'Any personal expenses',
                'Any specific component not mentioned in inclusions',
                'Entrance fees to monasteries, monuments, museums.',
                'Tips to guide, driver, hotel staff etc.',
                'Any extra cost arising due to weather conditions, local disturbance etc..',
                'Flight Tickets',
                'Personal/Accidental Damages Cost',
                'Inner Line Permits',
                'Sightseeing Entrance Fees / Parking Fees',
                // '',
                // '*Anything not specifically mentioned under “service included.'
            ],
            priceBreakdown: [
                { label: 'Per person (twin share)', amount: 1200 },
                { label: 'Single supplement', amount: 300 }
            ],
            notes: 'Prices are indicative. Final price depends on season and availability.'
        },
        {
            id: 11,
            title: 'Mystic Mountains Journey',
            slug: 'mystic-mountains-journey',
            shortDescription: 'Ride where only the fearless dare go.',
            content: `<p><strong>Overview:</strong> Discover the breathtaking beauty of Ladakh with Golo Holidays, your trusted travel partner in the
land of high passes. We specialize in bike tours, sightseeing adventures, comfortable stays, authentic
Ladakhi cuisine, local experiences, and hassle-free taxi services — all crafted to give you the true
essence of the Himalayas.
Whether you’re chasing the thrill of rugged mountain rides, exploring serene monasteries, or simply
soaking in the tranquil vibes of Ladakh’s valleys, Golo Holidays ensures every moment becomes an
unforgettable memory.</p>
                                            <h5>Trip Snapshot</h5>
                                            <ul>
                                                <li>Duration: 10 Nights & 11 Days</li>
                                                <li>Difficulty: Moderate (high altitude)</li>
                                                <li>Meals: Breakfast included</li>
                                                <li>Group size: Medium groups min(15-20)</li>
                                            </ul>
                                            <h5>Where you'll stay</h5>
                                            <p>Comfortable hotels or camp, cozy homestays in all locations and lakeside camps.</p>
                                            <h5>Quick itinerary preview</h5>
                                            <p>Drass → Shargole → Aryan valley → Leh  → Nubra  → Pangong → Hanle → Tsomoriri → Jispa → Manali</p>`,
            bike: `<div class="table-container">  <table class="modern-table"> <thead> <tr> <th>S.NO</th> <th>Bike</th> <th>Price / Pax</th> </tr> </thead> <tbody> <tr> <td>01</td> <td>Own Bike</td> <td>10,500/-</td> </tr> <tr> <td>02</td> <td>Standard 500 CC Dual</td> <td>13,500/-</td> </tr> <tr> <td>03</td> <td>Himalayan 411 CC Dual</td> <td>15,500/-</td> </tr> <tr> <td>04</td> <td>Standard 500 CC Solo</td> <td>17,500/-</td> </tr> <tr> <td>05</td> <td>Himalayan 411 CC Solo</td> <td>19,500/-</td> </tr> </tbody> </table> </div> `,
            images: [
                'assets/bikker12.jpeg',
                'assets/bikker99.jpeg',
                'assets/bikker11.jpeg'
            ],
            price: 1200,
            duration: '10 Nights & 11 Days',
            tags: ['Ladakh', ],
            tourTypes: ['Bike Tour', 'Adventure', 'Ladakh Expedition'],
            highlights: [
                'Aryan Valley',
                'Motorbike-friendly routes',
                'Siachen', 'Shargole '
            ],
            itinerary: [
                { day: 1, title: ' Arrival at Srinagar – Drass', details: 'Upon arrival at Srinagar Airport, the group will be warmly welcomed and after breakfast we begin a breathtaking drive toward Drass, the second coldest inhabited place in the world, passing through the lush meadows of Sonamarg, crossing the dramatic Zoji La Pass, and stopping at scenic viewpoints in Drass Valley before checking in to the hotel or camp for an overnight stay in Drass.', image: 'assets/ladakh-main.jpeg' },
                { day: 2, title: 'Drass – Shargole (Via Suru Valley) ', details: 'Early in the morning, we visit the Drass War Memorial to pay homage to the brave soldiers of Kargil, after which we have breakfast and continue our journey along one of Ladakh’s most unique and scenic routes, crossing Umba La Pass at approximately 14,000 ft and reaching Sankoo, the gateway to the beautiful Suru Valley, where we stop for lunch amid lush greenery and snow-clad peaks; later, we proceed through Sapi Village, cross the adventurous Sapi Pass, and arrive in the serene Shargole Valley to check in at Nunkun Camp for an overnight stay at Shargole Camp.', image: 'assets/ladakh-bike-tour.jpeg' },
                { day: 3, title: 'Shargole – Aryan Valley (Dard Arya  Region)', details: 'After breakfast, we set out on a scenic journey toward the culturally rich Aryan Valley, home to the unique Broqpa tribe, with en-route visits to the ancient cave monastery and the serene Shashi Lake, followed by exploration of Lalung, Darchik, and Garkone villages, where natural waterfalls, the iconic Garkone Suspension Bridge, local museums, and traditional Aryan settlements offer a deep insight into the distinctive culture, architecture, and traditions of the Aryan people before an overnight stay in the Aryan Valley.', image: 'assets/pangong-ladakh.jpeg' },
                { day: 4, title: 'Aryan Valley – Leh', details: 'After breakfast, we drive toward Leh with en-route sightseeing at the Sangam View Point, where the Indus and Zanskar rivers meet, followed by a visit to Gurudwara Pathar Sahib and an optional stop at the fascinating Magnetic Hill, before arriving in Leh to check in at the hotel; the evening is free for leisure or a stroll through the local market, with an overnight stay in Leh.', image: 'assets/road-ladakh.jpeg' },
                { day: 5, title: 'Leh – Nubra Valley (Via Khardung La)', details: 'After breakfast, we drive to the beautiful Nubra Valley via the world-famous Khardung La Pass, one of the highest motorable roads in the world, with visits to Diskit Monastery and the towering Maitreya Buddha Statue, followed by time at the sand dunes of Hunder where an optional double-humped Bactrian camel safari can be enjoyed, before an overnight stay at Hunder in Nubra Valley.', image: 'assets/hemis-monastery.jpeg' },
                { day: 6, title: 'Nubra Valley – Pangong Lake (Via Shyok Route)', details: 'After breakfast, we proceed toward the iconic Pangong Lake via the scenic Shyok route, enjoying breathtaking views of the Shyok River landscapes along the way, and on arrival at Pangong Lake we witness its mesmerizing changing shades of blue before continuing to the serene lakeside village of Merak for an overnight stay.', image: 'assets/ladakh-bike.jpeg' },
                { day: 7, title: 'Merak – Hanle (Via Demchok Route)', details: 'We embark on an adventurous journey along a lesser-explored route toward Hanle, driving via the Demchok route near the India–China border region, crossing the spectacular Umling La Pass—one of the highest motorable passes in the world—and Nurbu La Pass, before arriving in Hanle, renowned for its crystal-clear skies and astronomical observatory, where we settle in for an overnight stay.', image: '' },
                { day: 8, title: 'Hanle – Tso Moriri (Via Chumur & Silsila La)', details: 'After breakfast, we depart toward the stunning Tso Moriri Lake, traveling through remote and breathtaking landscapes via the Chumur Road and Silsila La Pass, with chances to observe nomadic Changpa settlements and high-altitude wildlife along the way, and an optional stop to bathe in a natural open-sky pond, before reaching the pristine and sacred Tso Moriri Lake for an overnight stay near the lake.', image: '' },
                { day: 9, title: 'Tso Moriri – Jispa', details: 'After breakfast, we drive toward Jispa, crossing the Ladakh–Himachal border and enjoying optional views of Tso Kar Lake, the vast More Plains (Moray Plains), and dramatic Himalayan landscapes with river crossings along the way, before arriving in Jispa to relax and settle in for an overnight stay at Jispa.', image: '' },
                { day: 10, title: 'Jispa – Manali', details: 'After breakfast, we drive to Manali via the high-altitude Baralacha La Pass, passing through the picturesque Sissu Valley and the iconic Atal Tunnel, and arrive in Manali by evening for an overnight stay in Manali.', image: '' },
                { day: 11, title: 'Departure', details: 'After breakfast, the tour concludes with departure from Manali, as you carry back unforgettable memories of the Mystic Mountains Journey.', image: '' },


            ],
            inclusions: [
                'RE Himalayan 411 Bike with Fuel',
                // 'Medical Kit',
                'One Bonfire in a trip',
                'Helmets for Rider and Pillion',
                'Permits',
                'Airport Pick Up & Drop',
                'Oxygen Cylinder',
                // 'Bike',
                'Fuel',
                'Triple Sharing ',
                'Marshal',
                'Backup Car',
                'Mechanic',
                // 'Backup Vehicle for Luggage'
            ],
            exclusions: [
                'Lunch',
                '5% GST',
                'Any personal expenses',
                'Any specific component not mentioned in inclusions',
                'Entrance fees to monasteries, monuments, museums.',
                'Tips to guide, driver, hotel staff etc.',
                'Any extra cost arising due to weather conditions, local disturbance etc..',
                'Flight Tickets',
                'Personal/Accidental Damages Cost',
                'Inner Line Permits',
                'Sightseeing Entrance Fees / Parking Fees',
                // '',
                // '*Anything not specifically mentioned under “service included.'
            ],
            priceBreakdown: [
                { label: 'Per person (twin share)', amount: 1200 },
                { label: 'Single supplement', amount: 300 }
            ],
            notes: 'Prices are indicative. Final price depends on season and availability.'
        },
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
