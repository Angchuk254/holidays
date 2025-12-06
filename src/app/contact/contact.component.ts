import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PackageService } from '../services/package.service';
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
  // Prefill context
  prefillLabel: string | null = null; // For UI display (e.g., package title or sight)

  constructor(private fb: FormBuilder, private contactService: ContactService,
    private route: ActivatedRoute, private packageService: PackageService) {
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

    // Read query params to allow pre-filling from 'Book' CTAs
    this.route.queryParamMap.subscribe(q => {
      const packageSlug = q.get('package');
      const subject = q.get('subject');
      const sight = q.get('sight');
      // package slug takes precedence — populate message and label
      if (packageSlug) {
        const pkg = this.packageService.getPackageBySlug(packageSlug);
        const title = pkg ? pkg.title : packageSlug;
        this.prefillLabel = title;
        const text = `Hi — I'm interested in the "${title}" package. Please share availability & pricing. (Package ID: ${packageSlug})`;
        this.contactForm.patchValue({ message: text });
      } else if (subject || sight) {
        // subject fallback or sight param
        const text = subject ? subject : (sight ? `I'm interested in the sight: ${sight}` : '');
        if (text) {
          this.prefillLabel = text.substring(0, 80);
          this.contactForm.patchValue({ message: text });
        }
      }
    });
  }

  clearPrefill() {
    this.prefillLabel = null;
    this.contactForm.patchValue({ message: '' });
  }
}
