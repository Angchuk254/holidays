// Lightweight Firebase initializer and helper for Realtime Database
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import { environment } from '../../environments/environment.development';

// Build firebaseConfig from environment file
const firebaseConfig = {
    apiKey: environment.apiKey,
    authDomain: environment.authDomain,
    databaseURL: (environment as any).databaseURL,
    projectId: environment.projectId,
    storageBucket: environment.storageBucket,
    messagingSenderId: environment.messagingSenderId,
    appId: environment.appId
};

let db: ReturnType<typeof getDatabase> | null = null;

function ensureDatabaseUrl() {
    if (!firebaseConfig.databaseURL) {
        // Provide a clear, actionable error to the developer instead of the low-level Firebase fatal error
        const proj = firebaseConfig.projectId || '<YOUR_PROJECT_ID>';
        throw new Error(
            `Missing Realtime Database URL in environment file. Please add a databaseURL property in src/environments/environment.development.ts, for example:\n` +
            `databaseURL: 'https://${proj}.firebaseio.com' OR 'https://${proj}.firebasedatabase.app'\n` +
            `You can find the correct URL in the Firebase console → Realtime Database → Web setup.`
        );
    }
}

export function initFirebase() {
    ensureDatabaseUrl();
    if (!getApps().length) {
        initializeApp(firebaseConfig);
    }
    if (!db) {
        db = getDatabase();
    }
    return db!;
}

export async function pushToPath(path: string, data: any) {
    try {
        const database = initFirebase();
        const nodeRef = ref(database, path);
        const result = await push(nodeRef, data);
        return result.key;
    } catch (err) {
        console.error('Failed to push to Firebase path', path, err);
        throw err;
    }
}
