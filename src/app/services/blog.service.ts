// src/app/services/blog.service.ts
import { Injectable } from '@angular/core';
import { Blog } from '.././model/blog.model';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    private blogs: Blog[] = [
        {
            id: 1,
            title: 'Top 10 Places to Visit in Ladakh',
            slug: 'top-10-places-ladakh',
            shortDescription: 'Explore the must-visit spots in Ladakh including monasteries, lakes, and valleys.',
            content: `<p><strong>Intro:</strong> Ladakh is a high-altitude desert of dramatic landscapes — sapphire lakes, stark mountain passes and centuries-old monasteries. This deep-dive guide expands on each top destination, offers longer itineraries for travelers who want more than a quick visit, and provides practical considerations for health, photography and road logistics.</p>
                                            <h4>Why Ladakh is special</h4>
                                            <p>Ladakh's unique combination of high-altitude routes, Tibetan Buddhist culture and vast open skies makes it a playground for bikers, photographers and explorers. The changing colours of Pangong Lake, dramatic passes like Khardung La and the welcoming monastery communities add layers of experience.</p>
                                            <h4>Top places to include</h4>
                                            <ul>
                                                <li><strong>Pangong Lake:</strong> Visit for sunrise and sunset — the colours change throughout the day due to mineral composition.</li>
                                                <li><strong>Nubra Valley:</strong> Sand dunes, Diskit monastery and authentic village stays with unique local hospitality.</li>
                                                <li><strong>Hemis & Thiksey:</strong> Two major monasteries offering cultural depth and festival experiences.</li>
                                                <li><strong>Shanti Stupa & Leh town:</strong> Accessible short stops with great views and local markets for souvenirs.</li>
                                            </ul>
                                            <h4>Suggested 7-day itinerary (moderate pace)</h4>
                                            <ol>
                                                <li><strong>Day 1:</strong> Arrival in Leh — rest and light walking around the local market to acclimatize.</li>
                                                <li><strong>Day 2:</strong> Leh local sightseeing — Hemis, Thiksey and Shanti Stupa for scenic viewpoints.</li>
                                                <li><strong>Day 3:</strong> Drive to Nubra Valley via Khardung La — visit Diskit and Hunder, enjoy camel rides and a village homestay.</li>
                                                <li><strong>Day 4:</strong> Nubra to Pangong — drive with photography stops and lakeside camp or guesthouse at Pangong Lake.</li>
                                                <li><strong>Day 5:</strong> Sunrise at Pangong, lakeside exploration and return drive to Leh with scenic stops.</li>
                                                <li><strong>Day 6:</strong> Optional adventure day — bike ride, village visits or shorter hikes for photographers.</li>
                                                <li><strong>Day 7:</strong> Relax and depart from Leh — final shopping or a short local walk.</li>
                                            </ol>
                                            <h4>Acclimatization & safety</h4>
                                            <p>High altitude is not to be taken lightly — rest on arrival, avoid heavy exertion for the first day, stay hydrated and monitor symptoms of AMS (acute mountain sickness). For longer itineraries, allow buffer days for adjustments.</p>
                                            <h4>Photography & travel tips</h4>
                                            <ul>
                                                <li>Bring polarising filters — they help with reflections on lakes.</li>
                                                <li>Plan early starts — golden hours make the most dramatic photos.</li>
                                                <li>Keep camera batteries warm — they drain faster at low temperatures.</li>
                                            </ul>
                                            <p>Want a handled experience? Our <a href="/packages/ladakh-adventure-trip">Ladakh Adventure Trip</a> (7-day) packages include supports, guided rides and curated photo stops.</p>`,
            image: 'assets/ladakh-carousel.jpeg',
            date: '2025-10-01',
            authorImage: 'assets/author-tashi.svg',
            authorBio: 'Tashi is a Ladakh-based guide and photographer who writes full-length guides for long-stay photographers and bikers.',
            tags: ['Ladakh', 'Travel', 'Adventure'],
            author: 'Tashi Dawa',
            readTime: '12 min read',
            highlights: ['Pangong Lake', 'Khardung La pass', 'Nubra Valley', 'Monastery festivals', 'Photography stops'],
            summary: 'An extended guide to Ladakh with practical planning, safety and photography tips for long-stay visitors.',
            relatedPackages: ['ladakh-adventure-trip']
        },
        {
            id: 2,
            title: 'Spiti Valley Adventure Guide',
            slug: 'spiti-valley-adventure',
            shortDescription: 'Everything you need to know about traveling and trekking in Spiti Valley.',
            content: `<p><strong>Intro:</strong> Spiti valley is a high-altitude cold desert that rewards travellers with raw landscapes, quiet villages and a deep sense of remoteness. This expanded article provides thoughtful preparation steps, cultural context and a richer itinerary for explorers who want to soak in the area instead of rushing through it.</p>
                                            <h4>First impressions & what to love</h4>
                                            <p>Visitors to Spiti often describe it as otherworldly — ancient monasteries perched on ridgelines, fossil-rich valleys and long, quiet roads under wide skies. Accommodation ranges from basic homestays to comfortable village guesthouses.</p>
                                            <h4>Extended 6-day itinerary</h4>
                                            <ol>
                                                <li><strong>Day 1:</strong> Arrive & rest in Kaza — acclimatize and take a short cultural walk.</li>
                                                <li><strong>Day 2:</strong> Key Monastery and cultural immersion in Kaza; evenings at a local teahouse.</li>
                                                <li><strong>Day 3:</strong> Langza and Komic — fossil sites and village exploration with photography stops.</li>
                                                <li><strong>Day 4:</strong> Pin Valley national park — gentle hikes, a chance to spot wildlife and enjoy unspoilt landscapes.</li>
                                                <li><strong>Day 5:</strong> Small treks and local encounters — support local crafts and join a homestay host for an evening meal.</li>
                                                <li><strong>Day 6:</strong> Return journey with scenic stops and departure.</li>
                                            </ol>
                                            <h4>Preparation & on-the-ground advice</h4>
                                            <p>Expect limited connectivity and basic medical facilities. Carry a small medical kit, enough cash for village purchases and warm clothing — nights get chilly. Respect local customs, and hire local guides where possible to support village economies.</p>
                                            <p>We run a guided option — <a href="/packages/spiti-valley-exploration">Spiti Valley Exploration</a> — that includes local guides, homestays and planned routes for an in-depth cultural experience.</p>`,
            image: 'assets/spiti-ladakh.jpeg',
            date: '2025-10-05',
            authorImage: 'assets/author-neha.svg',
            authorBio: 'Neha is an adventure travel specialist focused on high-altitude valleys and small-group experiences.',
            tags: ['Spiti', 'Adventure', 'Himalaya'],
            author: 'Neha Gupta',
            readTime: '10 min read',
            highlights: ['Kaza', 'Langza fossils', 'Pin Valley', 'Village homestays'],
            summary: 'Extended guide to Spiti with cultural insights, safety tips and a longer sample itinerary for explorers.',
            relatedPackages: ['spiti-valley-exploration']
        },
        {
            id: 3,
            title: 'Kashmir Travel Tips',
            slug: 'kashmir-travel-tips',
            shortDescription: 'Tips for a safe and enjoyable trip to the beautiful Kashmir valley.',
            content: `<p><strong>Intro:</strong> Kashmir's combination of placid lakes, Mughal gardens and snowy peaks make it an accessible and romantic destination. This long-form piece covers when to go, the signature experiences and a more complete 5-day plan with seasonal tips.</p>
                                            <h4>Where to start</h4>
                                            <p>Srinagar is the natural base for a Kashmir trip — stay on a houseboat, enjoy the local cuisine and use the city as a hub for excursions to Gulmarg and Pahalgam.</p>
                                            <h4>Detailed 5-day itinerary</h4>
                                            <ol>
                                                <li><strong>Day 1:</strong> Arrive Srinagar, settle on a houseboat and take a peaceful shikara ride in the evening.</li>
                                                <li><strong>Day 2:</strong> Visit Mughal gardens and the old city, sample local cuisine and explore handicrafts.</li>
                                                <li><strong>Day 3:</strong> Day trip to Gulmarg — optional gondola and short walks for nature lovers.</li>
                                                <li><strong>Day 4:</strong> Pahalgam for scenic river-side walks and valley views; explore local markets.</li>
                                                <li><strong>Day 5:</strong> Free morning and departure from Srinagar.</li>
                                            </ol>
                                            <h4>Season & packing</h4>
                                            <p>April through September gives you mild weather for sightseeing; winters are snowy and suit those seeking winter landscapes and snow activities. Pack layered clothing, and consider travel insurance for seasonal delays.</p>
                                            <p>Prefer a ready itinerary? Check <a href="/packages/kashmir-scenic-trip">Kashmir Scenic Trip</a> for a curated experience including houseboats and guided day-trips.</p>`,
            image: 'assets/bestLdakh.jpeg',
            date: '2025-10-10',
            authorImage: 'assets/author-amit.svg',
            authorBio: 'Amit is a long-time Kashmir traveler and writer sharing practical tips for scenic and comfortable stays.',
            tags: ['Kashmir', 'Travel', 'Tips'],
            author: 'Amit Joshi',
            readTime: '9 min read',
            highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Houseboat stay', 'Local cuisine'],
            summary: 'A complete, practical guide to make the most of a 3–5 day Kashmir break with seasonal advice.',
            relatedPackages: ['kashmir-scenic-trip']
        }
    ];

    constructor() { }

    getBlogs(): Blog[] {
        return this.blogs;
    }

    getBlogBySlug(slug: string): Blog | undefined {
        return this.blogs.find(blog => blog.slug === slug);
    }
}
