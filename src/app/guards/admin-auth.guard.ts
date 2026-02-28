import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

export const adminAuthGuard: CanActivateFn = async () => {
    const auth = inject(AdminAuthService);
    const router = inject(Router);
    const user = await auth.waitForAuth();

    if (auth.isAdmin(user)) {
        return true;
    }

    return router.createUrlTree(['/admin/login']);
};

export const adminLoginGuard: CanActivateFn = async () => {
    const auth = inject(AdminAuthService);
    const router = inject(Router);
    const user = await auth.waitForAuth();

    if (auth.isAdmin(user)) {
        return router.createUrlTree(['/admin/dashboard']);
    }

    return true;
};
