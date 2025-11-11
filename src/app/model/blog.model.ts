// src/app/models/blog.model.ts
export interface Blog {
    id: number;
    title: string;
    slug: string;
    shortDescription: string;
    content: string; // HTML or plain text
    image: string;
    date: string;
    tags?: string[];

    // Enhanced fields for blog details
    author?: string;
    readTime?: string;
    highlights?: string[];
    summary?: string;
    relatedPackages?: string[]; // array of package slugs to recommend
}
