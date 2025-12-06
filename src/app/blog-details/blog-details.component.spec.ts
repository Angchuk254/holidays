import { TestBed } from '@angular/core/testing';
import { BlogDetailsComponent } from './blog-details.component';
import { ActivatedRoute } from '@angular/router';
import { of, BehaviorSubject } from 'rxjs';
import { BlogService } from '../services/blog.service';
import { PackageService } from '../services/package.service';
import { Title, Meta } from '@angular/platform-browser';

describe('BlogDetailsComponent (SEO)', () => {
  let paramMap$: BehaviorSubject<any>;
  let mockBlogService: Partial<BlogService>;
  let mockPackageService: Partial<PackageService>;

  beforeEach(async () => {
    paramMap$ = new BehaviorSubject(new Map([['slug', 'top-10-places-ladakh']]));

    mockBlogService = {
      getBlogBySlug: (slug: string) => ({
        id: 1,
        title: 'Test Blog',
        slug: 'top-10-places-ladakh',
        shortDescription: 'Short',
        content: '<p>content</p>',
        image: '/assets/ladakh-carousel.jpeg',
        date: '2025-10-01',
        author: 'Tashi',
        summary: 'Summary here',
        relatedPackages: ['ladakh-adventure-trip']
      })
    };

    mockPackageService = {
      getPackages: () => []
    };

    await TestBed.configureTestingModule({
      providers: [
        BlogDetailsComponent,
        { provide: ActivatedRoute, useValue: { paramMap: paramMap$.asObservable() } },
        { provide: BlogService, useValue: mockBlogService },
        { provide: PackageService, useValue: mockPackageService },
        Title,
        Meta
      ]
    }).compileComponents();
  });

  it('sets title and meta tags and injects JSON-LD', () => {
    const comp = TestBed.inject(BlogDetailsComponent);
    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);

    spyOn(title, 'setTitle').and.callThrough();
    spyOn(meta, 'updateTag').and.callThrough();

    // trigger component load
    (comp as any).loadBlog('top-10-places-ladakh');
    expect(title.setTitle).toHaveBeenCalled();
    expect(meta.updateTag).toHaveBeenCalled();

    // check JSON-LD script exists in head
    const scripts = Array.from(document.head.querySelectorAll('script[type="application/ld+json"]'));
    expect(scripts.length).toBeGreaterThan(0);
    const json = scripts[scripts.length - 1].textContent || '';
    expect(json).toContain('Article');
  });
});
