import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUSComponent {
  team = [
    { name: 'Tashi Dawa', role: 'Founder & CEO', photo: 'assets/ladakh-bike-pangong.jpeg' },
    { name: 'Tenzing Lama', role: 'Tour Manager', photo: 'assets/ladakh-bike-pangong.jpeg' },
    { name: 'Riya Sharma', role: 'Marketing Head', photo: 'assets/ladakh-bike-pangong.jpeg' },
    { name: 'Ankit Verma', role: 'Operations Lead', photo: 'assets/ladakh-bike-pangong.jpeg' }
  ];
  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
