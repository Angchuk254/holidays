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

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blogs', component: BlogsComponent },
    // { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'packages', component: PackagesComponent },
    // { path: 'package-details', component: PackagesComponent },
    { path: 'packages/:slug', component: PackageDetialsComponent },
    { path: 'about-us', component: AboutUSComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services/hotel-booking', component: HotelBookingComponent },
    { path: 'services/taxi-transport', component: TaxiTransportComponent },
    { path: 'services/bike-tours', component: BikeToursComponent },
    { path: 'services/camping-bonfire', component: CampingBonfireComponent },
    { path: 'services/local-sightseeing', component: LocalSightseeingComponent },
    { path: 'blogs/:slug', component: BlogDetailsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'trip-planner', component: TripPlannerComponent },
    { path: '**', redirectTo: '' } // Optional: handles unknown routes
];
