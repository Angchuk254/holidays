import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SeoConfig, SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showLayout = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private seoService: SeoService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.showLayout = !this.router.url.startsWith('/admin');
      const route = this.getDeepestRoute(this.activatedRoute);
      const seo = route.snapshot.data['seo'] as SeoConfig | undefined;
      if (!seo || (seo as any).skip) {
        return;
      }

      const url = `${window.location.origin}${this.router.url}`;
      this.seoService.update({ ...seo, url });
    });
  }

  private getDeepestRoute(route: ActivatedRoute): ActivatedRoute {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current;
  }
}
