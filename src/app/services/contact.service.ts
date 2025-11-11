import { Injectable } from '@angular/core';
import { pushToPath } from './firebase.service';
import { environment } from '../../environments/environment.development';

export interface ContactPayload {
    name: string;
    email: string;
    phone?: string;
    message: string;
    createdAt?: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
    private path = 'contacts'; // Realtime DB path

    constructor() { }

    async submitContact(payload: ContactPayload) {
        const data = {
            ...payload,
            createdAt: new Date().toISOString()
        };
        const key = await pushToPath(this.path, data);

        // Notify webhook (if configured). Do not throw on failures to avoid breaking the submit flow.
        if (environment.webhookUrl) {
            this.notifyWebhook(environment.webhookUrl, environment.webhookSecret || '', { id: key, ...data })
                .then(() => console.log('Notified webhook'))
                .catch(err => console.error('Webhook notification failed', err));
        }

        return key;
    }

    private async notifyWebhook(url: string, secret: string, payload: any) {
        try {
            const body = { token: secret, data: payload };
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Webhook responded with ${res.status}: ${text}`);
            }
            return await res.json();
        } catch (err) {
            // Bubble error to caller for logging; but do not interrupt main flow.
            throw err;
        }
    }
}
