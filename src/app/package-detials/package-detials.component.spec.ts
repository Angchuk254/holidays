import { TestBed } from '@angular/core/testing';
import { PackageDetialsComponent } from './package-detials.component';
import { PackageService } from '../services/package.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

describe('PackageDetialsComponent (SEO)', () => {
  let paramMap$: BehaviorSubject<any>;
  let mockPackageService: Partial<PackageService>;

  beforeEach(async () => {
    paramMap$ = new BehaviorSubject(new Map([['slug', 'test-package']]));

    mockPackageService = {
      getPackageBySlug: (slug: string) => ({
        id: 1,
        title: 'Test Package',
        slug: 'test-package',
        shortDescription: 'A short desc',
        content: '<p>test content</p>',
        images: ['/assets/test.jpg'],
        price: 12345,
        bike: '<table><tr><td>Info</td></tr></table>',
        tags: ['Test'],
        tourTypes: ['Adventure']
      }),
      getPackages: () => []
    };

    await TestBed.configureTestingModule({
      providers: [
        PackageDetialsComponent,
        { provide: ActivatedRoute, useValue: { paramMap: paramMap$.asObservable() } },
        { provide: PackageService, useValue: mockPackageService },
        Title,
        Meta
      ]
    }).compileComponents();
  });

  it('applies title/meta and appends JSON-LD to head', () => {
    const comp = TestBed.inject(PackageDetialsComponent);
    const title = TestBed.inject(Title);
    const meta = TestBed.inject(Meta);

    spyOn(title, 'setTitle').and.callThrough();
    spyOn(meta, 'updateTag').and.callThrough();

    (comp as any).loadPackage('test-package');

    expect(title.setTitle).toHaveBeenCalledWith('Test Package — Golo Holidays');
    expect(meta.updateTag).toHaveBeenCalled();

    const scripts = Array.from(document.head.querySelectorAll('script[type="application/ld+json"]'));
    expect(scripts.length).toBeGreaterThan(0);
    const json = scripts[scripts.length - 1].textContent || '';
    expect(json).toContain('Product');
  });
});
