export class LocalStorage {
  static get(key: string) {
    const item: string | null = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static set(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static del(key: string) {
    localStorage.removeItem(key);
  }
}

export class SessionStorage {
  static get(key: string) {
    const item: string | null = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static set(key: string, value: Object) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  static del(key: string) {
    sessionStorage.removeItem(key);
  }
}
