import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PackageService } from '../package.service';
import { Package } from '../../model/package.model';

@Component({
    selector: 'app-local-sightseeing',
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './local-sightseeing.component.html',
    styleUrl: './local-sightseeing.component.scss'
})
export class LocalSightseeingComponent {
    sights = [
        { id: 'hemis', title: 'Hemis Monastery', category: 'Monastery', short: 'One of Ladakh’s most important monasteries, famous for its festival.', details: 'Hemis houses vibrant murals, a rich library and an annual festival with mask dances — excellent for cultural photography and slow exploration.', image: '/assets/hemis.jfif', coords: { lat: 34.028, lng: 77.583 }, difficulty: 'Easy', bestTime: 'May-Sep', duration: '2–3 hrs', tags: ['Culture', 'Monastery'] },
        { id: 'thiksey', title: 'Thiksey Monastery', category: 'Monastery', short: 'A multi-level gompa with panoramic views over the Indus valley.', details: 'Thiksey resembles a smaller Potala palace and is perfect for sunrise visits — the Maitreya Buddha statue and rooftop viewpoints are highlights.', image: '/assets/ladakh-thiksey.jpeg', coords: { lat: 34.043, lng: 77.488 }, difficulty: 'Easy', bestTime: 'May-Oct', duration: '1–2 hrs', tags: ['Culture'] },
        { id: 'pangong', title: 'Pangong Lake', category: 'Lake', short: 'The iconic saltwater lake that changes colours throughout the day.', details: 'Early mornings and late evenings reveal the most dramatic colours. Permit requirements apply — we assist with paperwork and lakeside stays.', image: '/assets/pangong-ladakh.jpeg', coords: { lat: 33.990, lng: 78.219 }, difficulty: 'Easy', bestTime: 'May-Sep', duration: '3–6 hrs', tags: ['Nature', 'Photography'] },
        { id: 'shanti', title: 'Shanti Stupa', category: 'Viewpoint', short: 'White-domed stupa with sweeping views over Leh.', details: 'A short drive from Leh, Shanti Stupa is popular for sunrise photography and peaceful early-morning visits.', image: '/assets/shanti.jfif', coords: { lat: 34.166, lng: 77.585 }, difficulty: 'Easy', bestTime: 'All year', duration: '1 hr', tags: ['View', 'Photo'] },
        { id: 'nubra', title: 'Diskit & Hunder (Nubra Valley)', category: 'Valley', short: 'Sand dunes, monasteries and camel rides at Hunder.', details: 'Nubra Valley offers unique Bactrian camel experiences, lazy evenings in homestays and scenic sand dunes perfect for sunset photography.', image: '/assets/disktnunra.webp', coords: { lat: 34.765, lng: 77.625 }, difficulty: 'Moderate', bestTime: 'May-Sep', duration: '1–2 days', tags: ['Adventure', 'Family'] },
        { id: 'lehmarket', title: 'Leh Market & Bazaar', category: 'Market', short: 'Bustling local market for crafts, carpets and authentic Ladakhi goods.', details: 'A must for picking up local handicrafts, pashmina scarves and Tibetan artefacts. Best as a relaxed half-day wander.', image: '/assets/ladakh-main.jpeg', coords: { lat: 34.157, lng: 77.577 }, difficulty: 'Easy', bestTime: 'All year', duration: '1–2 hrs', tags: ['Shopping', 'Culture'] },
        { id: 'tso', title: 'Tso Moriri Lake', category: 'Lake', short: 'Remote high-altitude lake with vivid blue waters and sparsely populated shores.', details: 'Tso Moriri is quieter than Pangong and a wildlife-friendly environment — great for nature lovers and bird-watching.', image: '/assets/ladakh-bike-pangong.jpeg', coords: { lat: 33.007, lng: 78.025 }, difficulty: 'Moderate', bestTime: 'May-Sep', duration: '1 day', tags: ['Nature', 'Wildlife'] },
        { id: 'photospots', title: 'Sunset Viewpoints', category: 'Viewpoint', short: 'Curated photography spots around Leh and surrounding passes.', details: 'We take you to little-known vantage points timed for golden-hour and long-exposure night photography at remote sites.', image: '/assets/ladakh-bike.jpeg', difficulty: 'Moderate', bestTime: 'All year', duration: '2–4 hrs', tags: ['Photography'] }
    ];

    faqs = [
        { q: 'Do I need permits for Pangong?', a: 'Yes, certain areas require Inner Line Permits. We assist with permit formalities when you book a sightseeing trip with us.' },
        { q: 'Is acclimatisation necessary?', a: 'Yes — ascending slowly and resting at Leh for at least 24 hours is recommended. Avoid strenuous activity on arrival.' },
        { q: 'Are walking tours suitable for children?', a: 'Short gentle walks are fine, but high-altitude conditions may be challenging for very young children.' }
    ];

    gallery = ['/assets/ladakh-bike-pangong.jpeg', '/assets/culture-femlae.jpeg', '/assets/osrich-ladakh.jpeg', '/assets/pangong-ladakh.jpeg', '/assets/ladakh-main.jpeg', '/assets/road-ladakh.jpeg'];

    // related packages will be resolved by slug for richer detail
    relatedPackageSlugs = ['ladakh-adventure-trip', 'ladakh-photography-escape', 'ladakh-family-retreat'];
    relatedPackages: Package[] = [];

    // filter UI
    categories: string[] = [];
    selectedCategory: string = 'All';
    searchTerm: string = '';

    // gallery modal
    selectedImage: string | null = null;

    constructor(private packageService: PackageService) { }

    ngOnInit() {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // build category list
        const set = new Set<string>(['All']);
        this.sights.forEach(s => s.category && set.add(s.category));
        this.categories = Array.from(set);

        // resolve related packages
        const all = this.packageService.getPackages();
        this.relatedPackages = this.relatedPackageSlugs.map(slug => all.find(p => p.slug === slug)).filter((p): p is Package => !!p);
    }

    // getters and helpers
    get filteredSights() {
        const q = this.searchTerm.trim().toLowerCase();
        return this.sights.filter(s => {
            const categoryOk = this.selectedCategory === 'All' || s.category === this.selectedCategory;
            const searchOk = !q || [s.title, s.short, s.tags?.join(' ')].filter(Boolean).join(' ').toLowerCase().includes(q);
            return categoryOk && !!searchOk;
        });
    }

    openImage(url: string) {
        this.selectedImage = url;
    }

    closeImage() {
        this.selectedImage = null;
    }

    openMaps(s: any) {
        if (s.coords && s.coords.lat && s.coords.lng) {
            const url = `https://www.google.com/maps/search/?api=1&query=${s.coords.lat},${s.coords.lng}`;
            window.open(url, '_blank');
        }
    }

    resetFilters() {
        this.selectedCategory = 'All';
        this.searchTerm = '';
    }
}
