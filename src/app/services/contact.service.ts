import { Injectable } from '@angular/core';
import { initFirebase, pushToPath } from './firebase.service';
import { onValue, ref } from 'firebase/database';
import { environment } from '../../environments/environment';

export interface ContactPayload {
    name: string;
    email: string;
    phone?: string;
    message: string;
    createdAt?: string;
}

export interface ContactRecord extends ContactPayload {
    id: string;
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

    subscribeToContacts(onUpdate: (items: ContactRecord[]) => void, onError?: (err: any) => void) {
        const db = initFirebase();
        const listRef = ref(db, this.path);
        const unsubscribe = onValue(listRef, (snapshot) => {
            const data = snapshot.val() || {};
            const items: ContactRecord[] = Object.keys(data).map(id => ({
                id,
                ...data[id]
            }));
            items.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
            onUpdate(items);
        }, (err) => {
            if (onError) onError(err);
        });
        return unsubscribe;
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
