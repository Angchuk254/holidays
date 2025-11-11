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
            content: `<p><strong>Intro:</strong> Ladakh is a high-altitude desert of stunning lakes, mountain passes and monasteries. This guide highlights must-see spots, acclimatisation tips, and a compact itinerary for first-time visitors.</p>
                                            <h4>Suggested 4-day itinerary</h4>
                                            <ol>
                                                <li>Day 1: Arrive Leh & acclimatize</li>
                                                <li>Day 2: Leh local sightseeing (monasteries & markets)</li>
                                                <li>Day 3: Day trip to Pangong / Nubra (choose one)</li>
                                                <li>Day 4: Departure</li>
                                            </ol>
                                            <h4>Practical tips</h4>
                                            <ul>
                                                <li>Acclimatize slowly; stay hydrated.</li>
                                                <li>Carry warm layers; nights can be cold even in summer.</li>
                                                <li>Book permits in advance for some areas.</li>
                                            </ul>
                                            <p>Interested in a ready-made trip? Check our <a href="/packages/ladakh-adventure-trip">Ladakh Adventure Trip</a> for a full 7-day option.</p>`,
            image: 'assets/ladakh-carousel.jpeg',
            date: '2025-10-01',
            tags: ['Ladakh', 'Travel', 'Adventure'],
            author: 'Tashi Dawa',
            readTime: '6 min read',
            highlights: ['Pangong Lake', 'Khardung La pass', 'Monastery tours'],
            summary: 'A compact guide to must-see places in Ladakh for adventure travelers.',
            relatedPackages: ['ladakh-adventure-trip']
        },
        {
            id: 2,
            title: 'Spiti Valley Adventure Guide',
            slug: 'spiti-valley-adventure',
            shortDescription: 'Everything you need to know about traveling and trekking in Spiti Valley.',
            content: `<p><strong>Intro:</strong> Spiti is remote, rugged and culturally rich. This guide covers how to prepare, what to expect, and a suggested mini-itinerary for a first-timer.</p>
                                            <h4>Suggested 3-day itinerary</h4>
                                            <ol>
                                                <li>Day 1: Reach Kaza and rest</li>
                                                <li>Day 2: Explore Komic & Langza villages</li>
                                                <li>Day 3: Short hikes and return</li>
                                            </ol>
                                            <h4>Quick Tips</h4>
                                            <ul><li>Best visited between May and October</li><li>Carry cash and basic medicines</li></ul>
                                            <p>We offer a guided <a href="/packages/spiti-valley-exploration">Spiti Valley Exploration</a> package if you prefer a planned route.</p>`,
            image: 'assets/spiti-ladakh.jpeg',
            date: '2025-10-05',
            tags: ['Spiti', 'Adventure', 'Himalaya'],
            author: 'Neha Gupta',
            readTime: '5 min read',
            highlights: ['Kaza', 'Langza fossils', 'Pin Valley National Park'],
            summary: 'Practical advice for planning a Spiti trip, with highlights and safety tips.',
            relatedPackages: ['spiti-valley-exploration']
        },
        {
            id: 3,
            title: 'Kashmir Travel Tips',
            slug: 'kashmir-travel-tips',
            shortDescription: 'Tips for a safe and enjoyable trip to the beautiful Kashmir valley.',
            content: `<p><strong>Intro:</strong> Kashmir's lakes, gardens and mountain scenery make it a top pick for relaxed scenic trips. This short guide covers the best time to visit, highlights and a suggested itinerary.</p>
                                            <h4>Suggested 3-day itinerary</h4>
                                            <ol>
                                                <li>Day 1: Arrive Srinagar & houseboat stay</li>
                                                <li>Day 2: Gulmarg day trip (gondola optional)</li>
                                                <li>Day 3: Pahalgam or local markets and depart</li>
                                            </ol>
                                            <p>Looking for a package? See our <a href="/packages/kashmir-scenic-trip">Kashmir Scenic Trip</a>.</p>`,
            image: 'assets/bestLdakh.jpeg',
            date: '2025-10-10',
            tags: ['Kashmir', 'Travel', 'Tips'],
            author: 'Amit Joshi',
            readTime: '4 min read',
            highlights: ['Dal Lake', 'Gulmarg', 'Srinagar markets'],
            summary: 'Short, actionable tips to make the most of a short Kashmir trip.',
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
