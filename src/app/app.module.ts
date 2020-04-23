import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { LanguageService } from './language.service';
import { TranslocoRootModule } from './transloco-root.module';

function preloadLanguage(languageService: LanguageService) {
  return () => languageService.preloadLanguage();
}

@NgModule({
  declarations: [AppComponent, LanguageSelectComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
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
