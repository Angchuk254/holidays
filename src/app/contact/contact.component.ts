import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitting = false;
  submitted = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^[0-9+\-() ]{7,20}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  async submitForm() {
    this.error = null;
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.submitting = true;
    try {
      const payload = this.contactForm.value;
      const key = await this.contactService.submitContact(payload);
      console.log('Submitted to Firebase, key=', key);
      this.submitted = true;
      this.contactForm.reset();
    } catch (err) {
      console.error(err);
      this.error = 'Failed to submit. Please try again later.';
    } finally {
      this.submitting = false;
    }
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
