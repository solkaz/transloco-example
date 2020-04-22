import { Injectable } from '@angular/core';
import { TranslocoService, getBrowserLang } from '@ngneat/transloco';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly defaultLanguage = this.transloco.getDefaultLang();
  readonly languages = this.transloco.getAvailableLangs() as string[];

  constructor(
    private transloco: TranslocoService,
    private localStorage: LocalStorageService
  ) {}

  get currentLanguage(): string {
    return this.transloco.getActiveLang();
  }

  async preloadLanguage(): Promise<any> {
    const langFromLocalStorage = this.localStorage.getItem('lang');
    let lang = langFromLocalStorage || getBrowserLang() || this.defaultLanguage;
    if (!this.languages.includes(lang)) {
      lang = this.defaultLanguage;
    }
    this.transloco.setActiveLang(lang);

    return this.transloco.load(lang).toPromise();
  }

  setActiveLanguage(language: string): void {
    this.transloco.setActiveLang(language);
    this.localStorage.setItem('lang', language);
  }
}
