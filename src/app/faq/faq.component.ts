import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faq',
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    {
      question: 'What is the best time to visit Ladakh?',
      answer: 'The best time is from May to September when roads are open and weather is pleasant for sightseeing and biking.'
    },
    {
      question: 'Do you provide bike rentals?',
      answer: 'Yes! We offer Royal Enfield bikes and other options for our adventure tours, fully serviced and fuelled.'
    },
    {
      question: 'Is it safe to travel solo to Ladakh?',
      answer: 'Absolutely! Our guides and local support ensure safety and assistance throughout your journey.'
    },
    {
      question: 'Do you customize travel packages?',
      answer: 'Yes, we offer fully customizable packages based on your budget, duration, and preferences.'
    },
    {
      question: 'How can I book a tour?',
      answer: 'You can book directly through our “Contact Us” or “Book Now” page, or call us for quick booking support.'
    }
  ];
  recommendedPackages = [
    {
      title: 'Ladakh Adventure Trip',
      slug: 'ladakh-adventure-trip',
      shortDescription: 'Experience the thrill of Ladakh with a 7-day bike and camp journey.',
      image: 'assets/triop-lad.jpeg'
    },
    {
      title: 'Spiti Valley Expedition',
      slug: 'spiti-valley-exploration',
      shortDescription: 'Explore the stunning landscapes and monasteries of Spiti.',
      image: 'assets/road-ladakh.jpeg'
    },
    {
      title: 'Kashmir Paradise Tour',
      slug: 'kashmir-scenic-trip',
      shortDescription: 'Discover the serene beauty of Dal Lake and Gulmarg.',
      image: 'assets/kas.jpeg'
    }
  ];
}
