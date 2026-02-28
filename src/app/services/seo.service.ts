import { Injectable, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export type SeoConfig = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  robots?: string;
};

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  update(config: SeoConfig) {
    this.titleService.setTitle(config.title);
    this.metaService.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }
    if (config.robots) {
      this.metaService.updateTag({ name: 'robots', content: config.robots });
    }

    const image = config.image || `${this.document.location.origin}/assets/ladakh-main.jpeg`;
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });

    if (config.url) {
      this.setCanonical(config.url);
    }
  }

  setCanonical(url: string) {
    const head = this.document.head;
    let link = head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
