export class LocalStorage {
    static get(key: string): any | null {
        const item: string | null = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    static set(key: string, value: Object): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static del(key: string): void {
        localStorage.removeItem(key);
    }
}

export class SessionStorage {
    static get(key: string): any | null {
        const item: string | null = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    static set(key: string, value: Object): void {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    static del(key: string): void {
        sessionStorage.removeItem(key);
    }
}
