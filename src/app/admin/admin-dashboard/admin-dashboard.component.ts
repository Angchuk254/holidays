import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService, ContactRecord } from '../../services/contact.service';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
    selector: 'app-admin-dashboard',
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
    contacts: ContactRecord[] = [];
    loading = true;
    error: string | null = null;
    search = '';
    private unsubscribe?: () => void;

    constructor(
        private contactService: ContactService,
        private auth: AdminAuthService,
        private router: Router
    ) { }

    ngOnInit() {
        try {
            this.unsubscribe = this.contactService.subscribeToContacts(
                (items) => {
                    this.contacts = items;
                    this.loading = false;
                },
                (err) => {
                    const message = err?.message || 'Failed to load contacts.';
                    this.error = message;
                    this.loading = false;
                }
            );
        } catch (err: any) {
            this.error = err?.message || 'Failed to load contacts.';
            this.loading = false;
        }
    }

    get filteredContacts() {
        const q = this.search.trim().toLowerCase();
        if (!q) return this.contacts;
        return this.contacts.filter(item =>
            (item.name || '').toLowerCase().includes(q) ||
            (item.email || '').toLowerCase().includes(q) ||
            (item.phone || '').toLowerCase().includes(q) ||
            (item.message || '').toLowerCase().includes(q)
        );
    }

    trackById(_: number, item: ContactRecord) {
        return item.id;
    }

    async logout() {
        await this.auth.logout();
        this.router.navigate(['/admin/login']);
    }

    ngOnDestroy() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
}
