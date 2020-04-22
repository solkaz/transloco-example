import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { LanguageService } from './language.service';

function preloadLanguage(languageService: LanguageService) {
  return () => languageService.preloadLanguage();
}

@NgModule({
  declarations: [AppComponent, LanguageSelectComponent],
  imports: [BrowserModule, HttpClientModule, TranslocoRootModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: preloadLanguage,
      multi: true,
      deps: [LanguageService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
