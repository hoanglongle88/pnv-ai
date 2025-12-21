const PREFIX = 'app_';

export const storage = {
  set<T>(key: string, value: T): void {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  },

  get<T>(key: string): T | null {
    const value = localStorage.getItem(PREFIX + key);
    return value ? (JSON.parse(value) as T) : null;
  },

  remove(key: string): void {
    localStorage.removeItem(PREFIX + key);
  },

  clear(): void {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(PREFIX))
      .forEach((key) => localStorage.removeItem(key));
  },
};
