import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  get localStorage(): Window['localStorage'] {
    return window.localStorage;
  }

  getItem(key: string): string | null {
    return this.localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }

  hasItem(key: string): boolean {
    return this.getItem(key) !== null;
  }

  removeItem(key: string): void {
    this.removeItem(key);
  }
}
