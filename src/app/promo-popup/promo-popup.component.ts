import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-promo-popup',
  imports: [CommonModule, RouterLink],
  templateUrl: './promo-popup.component.html',
  styleUrl: './promo-popup.component.scss'
})
export class PromoPopupComponent {
  showPromo = false;

  ngOnInit() {
    // Auto show after 4 seconds
    setTimeout(() => {
      this.showPromo = true;
    }, 4000);
  }

  closePromo() {
    this.showPromo = false;
    localStorage.setItem('seenPromo', 'true');
  }
}
