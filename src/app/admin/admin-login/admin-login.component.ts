import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
    selector: 'app-admin-login',
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './admin-login.component.html',
    styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
    form: FormGroup;
    loading = false;
    error: string | null = null;

    constructor(private fb: FormBuilder, private auth: AdminAuthService, private router: Router) {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    async submit() {
        this.error = null;
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;
        try {
            const { email, password } = this.form.value;
            const user = await this.auth.login(email, password);
            if (!this.auth.isAdmin(user)) {
                await this.auth.logout();
                this.error = 'Access denied for this account.';
                return;
            }
            this.router.navigate(['/admin/dashboard']);
        } catch (err: any) {
            this.error = err?.message || 'Login failed. Please try again.';
        } finally {
            this.loading = false;
        }
    }
}
