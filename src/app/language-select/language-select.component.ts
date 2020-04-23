import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSelectComponent {
  readonly languages = this.languageService.languages;

  constructor(private languageService: LanguageService) {}

  get currentLanguage(): string {
    return this.languageService.currentLanguage;
  }

  onLanguageChange(event: any) {
    const language = event.target.value;
    if (this.currentLanguage !== language) {
      this.languageService.setActiveLanguage(language);
    }
  }
}
