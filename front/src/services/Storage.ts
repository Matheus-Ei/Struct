export class LocalStorage {
    static get(key: string) {
        const item: string | null = localStorage.getItem(key);
        return (item == null) ? false : JSON.parse(item)

    }

    static set(key: string, value: Object) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    static del(key: string) {
        localStorage.removeItem(key);
        return true;
    }
}

export class SessionStorage {
    static get(key: string) {
        const item: string | null = sessionStorage.getItem(key);
        return (item == null) ? false : JSON.parse(item)
    }

    static set(key: string, value: Object) {
        sessionStorage.setItem(key, JSON.stringify(value));
        return true;
    }

    static del(key: string) {
        sessionStorage.removeItem(key);
        return true;
    }
}

