import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { PackagesComponent } from './packages/packages.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component'; // Add if you have one
import { PackageDetialsComponent } from './package-detials/package-detials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';
import { HotelBookingComponent } from './services/hotel-booking/hotel-booking.component';
import { TaxiTransportComponent } from './services/taxi-transport/taxi-transport.component';
import { BikeToursComponent } from './services/bike-tours/bike-tours.component';
import { CampingBonfireComponent } from './services/camping-bonfire/camping-bonfire.component';
import { LocalSightseeingComponent } from './services/local-sightseeing/local-sightseeing.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { adminAuthGuard, adminLoginGuard } from './guards/admin-auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            seo: {
                title: 'Golo Holidays — Ladakh Tours, Trips, Trekking & Bike Packages',
                description: 'Plan your Ladakh tour with local experts. Bike trips, trekking, Nubra Valley, Pangong Lake, Aryan Valley and custom itineraries across Ladakh, Spiti and Kashmir.',
                keywords: 'ladakh tour, ladakh trip, trekking ladakh, nubra valley, pangong lake, aryan valley, ladakh bike tour, leh tour, leh ladakh packages, spiti tour, kashmir tour'
            }
        }
    },
    {
        path: 'blogs',
        component: BlogsComponent,
        data: {
            seo: {
                title: 'Travel Blogs — Ladakh, Spiti & Kashmir Guides | Golo Holidays',
                description: 'Travel tips, route guides and local insights for Ladakh tours, Nubra Valley, Pangong Lake, Spiti Valley and Kashmir.',
                keywords: 'ladakh travel tips, ladakh blog, pangong guide, nubra valley guide, spiti travel tips, kashmir blog'
            }
        }
    },
    // { path: 'blog-details', component: BlogDetailsComponent },
    {
        path: 'packages',
        component: PackagesComponent,
        data: {
            seo: {
                title: 'Tour Packages — Ladakh, Spiti & Kashmir Trips | Golo Holidays',
                description: 'Browse curated tour packages for Ladakh, Nubra, Pangong, Aryan Valley, Spiti and Kashmir. Bike tours, trekking trips and custom itineraries.',
                keywords: 'ladakh packages, ladakh bike tour, nubra pangong tour, aryan valley trip, ladakh trekking, leh tour packages, spiti packages, kashmir packages'
            }
        }
    },
    // { path: 'package-details', component: PackagesComponent },
    { path: 'packages/:slug', component: PackageDetialsComponent, data: { seo: { skip: true } } },
    {
        path: 'about-us',
        component: AboutUSComponent,
        data: {
            seo: {
                title: 'About Golo Holidays — Ladakh Travel Experts',
                description: 'Meet your Ladakh travel experts. We specialize in bike tours, trekking trips, Nubra and Pangong itineraries with local guides.',
                keywords: 'about golo holidays, ladakh travel agency, ladakh tour operator, leh travel experts'
            }
        }
    },
    {
        path: 'contact',
        component: ContactComponent,
        data: {
            seo: {
                title: 'Contact Golo Holidays — Plan Your Ladakh Trip',
                description: 'Get in touch to plan your Ladakh tour, bike trip, Nubra Valley or Pangong Lake itinerary. Fast support and local guidance.',
                keywords: 'contact ladakh tour, ladakh trip enquiry, leh tour contact, golo holidays contact'
            }
        }
    },
    {
        path: 'services/hotel-booking',
        component: HotelBookingComponent,
        data: {
            seo: {
                title: 'Hotel Booking in Ladakh — Stays in Leh, Nubra, Pangong',
                description: 'Book trusted hotels and camps in Leh, Nubra Valley, Pangong Lake and nearby regions with Golo Holidays.',
                keywords: 'ladakh hotel booking, leh hotels, nubra camps, pangong lake camps, ladakh stays'
            }
        }
    },
    {
        path: 'services/taxi-transport',
        component: TaxiTransportComponent,
        data: {
            seo: {
                title: 'Taxi & Transport in Ladakh — Local Transfers',
                description: 'Reliable taxi and transport services for Ladakh tours, Nubra Valley, Pangong Lake and Aryan Valley.',
                keywords: 'ladakh taxi, leh taxi, nubra transport, pangong taxi, ladakh cab'
            }
        }
    },
    {
        path: 'services/bike-tours',
        component: BikeToursComponent,
        data: {
            seo: {
                title: 'Ladakh Bike Tours — Leh, Nubra, Pangong Routes',
                description: 'Adventure bike tours across Leh, Nubra Valley, Pangong Lake, Hanle and high passes. Guided and supported rides.',
                keywords: 'ladakh bike tour, leh bike trip, nubra pangong bike tour, ladakh expedition, leh motorcycle tour'
            }
        }
    },
    {
        path: 'services/camping-bonfire',
        component: CampingBonfireComponent,
        data: {
            seo: {
                title: 'Camping & Bonfire in Ladakh — Pangong, Nubra',
                description: 'Camp under the stars in Pangong and Nubra with bonfire nights and safe, comfortable setups.',
                keywords: 'ladakh camping, pangong camp, nubra camp, bonfire ladakh'
            }
        }
    },
    {
        path: 'services/local-sightseeing',
        component: LocalSightseeingComponent,
        data: {
            seo: {
                title: 'Local Sightseeing in Ladakh — Leh, Monasteries & Valleys',
                description: 'Explore Leh Palace, monasteries, Sangam, Magnetic Hill and more with local sightseeing tours.',
                keywords: 'ladakh sightseeing, leh local tour, ladakh monasteries, magnetic hill, sangam ladakh'
            }
        }
    },
    { path: 'blogs/:slug', component: BlogDetailsComponent, data: { seo: { skip: true } } },
    {
        path: 'gallery',
        component: GalleryComponent,
        data: {
            seo: {
                title: 'Ladakh Gallery — Tours, Treks & Bike Trips',
                description: 'View our Ladakh travel gallery featuring Nubra, Pangong, Aryan Valley and bike tour highlights.',
                keywords: 'ladakh gallery, nubra photos, pangong lake images, aryan valley photos, ladakh bike tour gallery'
            }
        }
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: {
            seo: {
                title: 'Ladakh Tour FAQs — Trips, Permits & Best Time',
                description: 'Frequently asked questions about Ladakh tours, bike trips, permits, best season and safety.',
                keywords: 'ladakh tour faq, ladakh permits, best time ladakh, ladakh trip questions'
            }
        }
    },
    {
        path: 'trip-planner',
        component: TripPlannerComponent,
        data: {
            seo: {
                title: 'Ladakh Trip Planner — Custom Tours & Itineraries',
                description: 'Build a custom Ladakh itinerary with experts. Plan your Nubra, Pangong, Hanle and Aryan Valley route.',
                keywords: 'ladakh trip planner, ladakh itinerary, nubra pangong itinerary, aryan valley trip plan'
            }
        }
    },
    {
        path: 'admin/login',
        component: AdminLoginComponent,
        canActivate: [adminLoginGuard],
        data: {
            seo: {
                title: 'Admin Login — Golo Holidays',
                description: 'Admin login for Golo Holidays.',
                robots: 'noindex, nofollow'
            }
        }
    },
    {
        path: 'admin/dashboard',
        component: AdminDashboardComponent,
        canActivate: [adminAuthGuard],
        data: {
            seo: {
                title: 'Admin Dashboard — Golo Holidays',
                description: 'Admin dashboard for contact enquiries.',
                robots: 'noindex, nofollow'
            }
        }
    },
    { path: '**', redirectTo: '' } // Optional: handles unknown routes
];
