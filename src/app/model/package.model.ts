// src/app/models/package.model.ts
export interface Package {
    id: number;
    title: string;
    slug: string;
    shortDescription: string;
    content: string; // HTML or plain text overview
    images: string[];
    price: number;
    duration?: string;
    tags?: string[];

    // New structured details for package detail page
    highlights?: string[]; // short bullet highlights
    itinerary?: Array<{
        day: number;
        title?: string;
        details: string;
        image?: string;
    }>;
    inclusions?: string[];
    exclusions?: string[];
    priceBreakdown?: Array<{ label: string; amount: number }>;
    notes?: string; // any important notes / booking terms
}
