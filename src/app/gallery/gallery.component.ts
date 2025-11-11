import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  destinations = [
    { name: 'Ladakh Adventure', image: 'assets/bike-ladkah-leh.jpeg', location: 'Ladakh, India' },
    { name: 'Spiti Valley', image: 'assets/spiti-ladakh.jpeg', location: 'Himachal Pradesh' },
    { name: 'Kashmir Paradise', image: 'assets/adv-kashmir.jpeg', location: 'Jammu & Kashmir' },
    { name: 'Leh Monastery', image: 'assets/znakser.jpeg', location: 'Leh' },
    { name: 'Tso Moriri Lake', image: 'assets/ladakh-team.jpeg', location: 'Ladakh' },
    { name: 'Nubra Valley', image: 'assets/numbra.jpeg', location: 'Ladakh' }
  ];
}
