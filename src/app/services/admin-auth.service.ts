import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirebaseAuth } from './firebase.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
    private auth = getFirebaseAuth();
    private currentUser: User | null = null;
    private readyResolve: ((value: User | null) => void) | null = null;
    private ready = new Promise<User | null>((resolve) => (this.readyResolve = resolve));

    constructor() {
        onAuthStateChanged(this.auth, (user) => {
            this.currentUser = user;
            if (this.readyResolve) {
                this.readyResolve(user);
                this.readyResolve = null;
            }
        });
    }

    async waitForAuth() {
        if (this.currentUser !== null) return this.currentUser;
        return this.ready;
    }

    getUser() {
        return this.currentUser;
    }

    isAdmin(user: User | null) {
        if (!user) return false;
        const allowed = (environment as any).adminEmails as string[] | undefined;
        if (!allowed || allowed.length === 0) {
            // If no allowlist is configured, allow any authenticated user.
            return true;
        }
        return !!user.email && allowed.includes(user.email);
    }

    async login(email: string, password: string) {
        const result = await signInWithEmailAndPassword(this.auth, email, password);
        this.currentUser = result.user;
        return result.user;
    }

    async logout() {
        await signOut(this.auth);
        this.currentUser = null;
    }
}
