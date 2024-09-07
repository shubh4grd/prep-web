import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { CorrectionSectionComponent } from './components/correction-section/correction-section.component';
import { LanguagesSectionComponent } from './components/languages-section/languages-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    FeaturesSectionComponent,
    CorrectionSectionComponent,
    LanguagesSectionComponent,
    TestimonialsSectionComponent,
    FaqSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
