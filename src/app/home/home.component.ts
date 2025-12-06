import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PromoPopupComponent } from "../promo-popup/promo-popup.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, PromoPopupComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  constructor(private title: Title, private meta: Meta) { }

  carouselImages: string[] = [];

  evenDayImages = [
    'assets/ladakh-carousel.jpeg',
    'assets/ladakh-pangong.jpeg',
    'assets/ladakh-bike.jpeg'
  ];

  oddDayImages = [
    'assets/cycle-tour-ladakh.jpeg',
    'assets/tour-de-bike.jpeg',
    'assets/ladakh-main.jpeg'
  ];

  ngOnInit(): void {
    // use the first blog as a lightweight default for home meta tags if available
    const first = this.blogs && this.blogs.length ? this.blogs[0] : null;
    if (first) {
      this.title.setTitle(`${first.title} — Golo Holidays`);
      this.meta.updateTag({ name: 'description', content: first.excerpt || '' });
      this.meta.updateTag({ property: 'og:title', content: first.title });
      this.meta.updateTag({ property: 'og:description', content: first.excerpt || '' });
      this.meta.updateTag({ property: 'og:image', content: first.image || 'https://example.com/assets/og-default.jpg' });
      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    }
    const today = new Date().getDate(); // get day number (1–31)
    this.carouselImages = today % 2 === 0 ? this.evenDayImages : this.oddDayImages;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit(): void {
    // Bootstrap's data attributes sometimes don't initialize for elements created by Angular's
    // *ngFor; ensure the Carousel is created programmatically using the global bootstrap bundle
    // which is included via angular.json "scripts" entry (bootstrap.bundle.min.js).
    const globalBootstrap = (window as any).bootstrap;
    const el = document.getElementById('heroCarousel');
    if (globalBootstrap && globalBootstrap.Carousel && el) {
      // @ts-ignore
      new globalBootstrap.Carousel(el, { interval: 4000, ride: 'carousel', touch: true, pause: false });
    }
  }

  featuredTrips = [
    { title: 'Ladakh Adventure', image: 'assets/touur-de-bike.jpeg', description: 'A thrilling bike and camp journey through the Himalayas.' },
    { title: 'Spiti Valley Expedition', image: 'assets/ladakh-bike-tour.jpeg', description: 'Discover untouched beauty and ancient monasteries.' },
    { title: 'Kashmir Paradise', image: 'assets/tour-kashmir.jpeg', description: 'Experience the romance of Dal Lake and snow peaks.' }
  ];

  popularPackages = [
    { title: 'Ladakh Adventure Trip', slug: 'ladakh-adventure-trip', shortDescription: '7-day adventure trip to Ladakh with camping.', image: 'assets/ladakh-bike.jpeg' },
    { title: 'Spiti Valley Expedition', slug: 'spiti-valley-exploration', shortDescription: 'Explore the serene valley of Spiti.', image: 'assets/tour-ladakh-spiti.jpeg' },
    { title: 'Kashmir Paradise Tour', slug: 'kashmir-scenic-trip', shortDescription: 'Discover Srinagar, Gulmarg, and Pahalgam.', image: 'assets/kashmir-valley.jpeg' }
  ];

  testimonials = [
    { name: 'Rahul Sharma', location: 'Delhi, India', message: 'Best travel experience ever! Golo Holidays made Ladakh unforgettable.' },
    { name: 'Neha Gupta', location: 'Mumbai, India', message: 'Professional team, great support, and breathtaking views!' },
    { name: 'Amit Joshi', location: 'Pune, India', message: 'Spiti trip was smooth and fun. Highly recommended!' }
  ];

  blogs = [
    { title: 'Top 5 Ladakh Travel Tips', slug: 'ladakh-travel-tips', excerpt: 'Before heading to Ladakh, make sure you know these essentials.', image: 'assets/cycle-tour-ladakh.jpeg' },
    { title: 'Best Time for Spiti Valley Trip', slug: 'spiti-best-time', excerpt: 'Learn when to plan your Spiti adventure for best weather.', image: 'assets/spiti-blog.jpeg' },
    { title: 'Kashmir in Winter', slug: 'kashmir-in-winter', excerpt: 'Snowy mountains, cozy stays, and breathtaking views.', image: 'assets/winter-kashmir.jpeg' }
  ];

  galleryPreview = [
    'assets/ladakh-bike-pangong.jpeg',
    'assets/culture-femlae.jpeg',
    'assets/osrich-ladakh.jpeg',
    'assets/car-trip-ladakh.jpeg',
    'assets/cable-kasmhir.jpeg',
    'assets/pangong-ladakh.jpeg'
  ];
  serviceCategories = [
    { key: 'stay', label: 'Stay & Travel' },
    { key: 'local', label: 'Local Experience' },
    { key: 'adventure', label: 'Adventure & Fun' },
  ];

  activeTab = 'stay';

  services = [
    { name: 'Hotel & Stay', icon: 'bi bi-house-door-fill', category: 'stay' },
    { name: 'Flight Booking', icon: 'bi bi-airplane-fill', category: 'stay' },
    { name: 'Taxi & Transfers', icon: 'bi bi-car-front-fill', category: 'stay' },
    { name: 'Local Sightseeing', icon: 'bi bi-map-fill', category: 'local' },
    { name: 'Cultural Tours', icon: 'bi bi-people-fill', category: 'local' },
    { name: 'Bonfire & Camping', icon: 'bi bi-fire', category: 'local' },
    { name: 'Meals & Dining', icon: 'bi bi-egg-fried', category: 'local' },
    { name: 'Bike Rentals', icon: 'bi bi-bicycle', category: 'adventure' },
    { name: 'Photography Spots', icon: 'bi bi-camera-fill', category: 'adventure' },
    { name: 'Adventure Activities', icon: 'bi bi-backpack-fill', category: 'adventure' },
  ];

  // ✅ Getter function for filtered services
  get filteredServices() {
    return this.services.filter(s => s.category === this.activeTab);
  }


}
