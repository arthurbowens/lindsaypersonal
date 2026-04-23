import { Component } from '@angular/core';
import { LANDING_CONTENT } from './data/landing-content';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AudienceSectionComponent } from './components/audience-section/audience-section.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { ObjectionsSectionComponent } from './components/objections-section/objections-section.component';
import { PillarsSectionComponent } from './components/pillars-section/pillars-section.component';
import { ProblemSectionComponent } from './components/problem-section/problem-section.component';
import { ResultsSectionComponent } from './components/results-section/results-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderSectionComponent,
    HeroSectionComponent,
    ProblemSectionComponent,
    AboutSectionComponent,
    PillarsSectionComponent,
    ResultsSectionComponent,
    TestimonialsSectionComponent,
    ObjectionsSectionComponent,
    AudienceSectionComponent,
    CtaSectionComponent,
    LandingFooterComponent,
  ],
  template: `
    <main class="min-h-screen bg-[#FCE4EC] text-[#1A1A1A]">
      <app-header-section [content]="content.header"></app-header-section>
      <app-hero-section [content]="content.hero" [whatsappLink]="content.header.whatsappLink"></app-hero-section>
      <app-problem-section
        [content]="content.problem"
        [whatsappLink]="content.header.whatsappLink"
      ></app-problem-section>
      <app-about-section [content]="content.about"></app-about-section>
      <app-pillars-section [pillars]="content.pillars"></app-pillars-section>
      <app-results-section
        [stats]="content.stats"
        [whatsappLink]="content.header.whatsappLink"
      ></app-results-section>
      <app-testimonials-section [testimonials]="content.testimonials"></app-testimonials-section>
      <app-objections-section [content]="content.objections"></app-objections-section>
      <app-audience-section [content]="content.audience"></app-audience-section>
      <app-cta-section [content]="content.cta" [whatsappLink]="content.header.whatsappLink"></app-cta-section>
      <app-landing-footer
        [instagramLink]="content.header.instagramLink"
        [whatsappLink]="content.header.whatsappLink"
      ></app-landing-footer>
    </main>
  `,
})
export class LandingPageComponent {
  protected readonly content = LANDING_CONTENT;
}
