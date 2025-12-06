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
    /** URL to the author's avatar image in /assets */
    authorImage?: string;
    /** Short author biography for the blog details page */
    authorBio?: string;
    readTime?: string;
    highlights?: string[];
    summary?: string;
    relatedPackages?: string[]; // array of package slugs to recommend
}
