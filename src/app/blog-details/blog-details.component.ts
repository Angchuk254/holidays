import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Blog } from '../model/blog.model';
import { CommonModule } from '@angular/common';
import { PackageService } from '../services/package.service';
import { Package } from '../model/package.model';
import { PromoPopupComponent } from "../promo-popup/promo-popup.component";

@Component({
  selector: 'app-blog-details',
  imports: [CommonModule, RouterLink, PromoPopupComponent],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {
  blog?: Blog;
  recommendedBlogs: Blog[] = [];
  recommendedTours: Package[] = [];
  showCopied = false;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private packageService: PackageService
  ) { }

  ngOnInit(): void {
    // Subscribe to route params to react to slug changes
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.loadBlog(slug);
    });
  }

  private loadBlog(slug: string) {
    this.blog = this.blogService.getBlogBySlug(slug);

    // Recommended blogs (excluding current)
    this.recommendedBlogs = this.blogService.getBlogs()
      .filter(b => b.slug !== slug)
      .slice(0, 3);

    // Recommended tours (example: first 3)
    this.recommendedTours = this.packageService.getPackages().slice(0, 3);

    // Scroll to top whenever a new blog loads
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  copyLink() {
    try {
      const url = window.location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          this.showCopied = true;
          setTimeout(() => (this.showCopied = false), 2000);
        });
      } else {
        // fallback
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = url;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        this.showCopied = true;
        setTimeout(() => (this.showCopied = false), 2000);
      }
    } catch (e) {
      console.error('Copy failed', e);
    }
  }
}
