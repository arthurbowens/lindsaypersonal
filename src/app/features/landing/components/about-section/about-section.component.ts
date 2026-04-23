import { Component, Input } from '@angular/core';
import { AboutContent } from '../../models/landing-content.model';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section id="sobre" class="bg-[#FFFFFF]">
      <div class="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <div class="order-2 space-y-5 lg:order-1">
          <h2 class="text-3xl font-bold text-[#1A1A1A] md:text-4xl">{{ content.title }}</h2>
          @for (paragraph of content.paragraphs; track paragraph) {
            <p class="text-[#1A1A1A]">{{ paragraph }}</p>
          }
          <ul class="grid gap-3 pt-2 sm:grid-cols-2">
            @for (item of content.bulletPoints; track item) {
              <li class="rounded-2xl bg-[#FCE4EC] px-4 py-3 text-sm font-medium text-[#1A1A1A]">
                {{ item }}
              </li>
            }
          </ul>
        </div>

        <div class="order-1 lg:order-2">
          <img
            src="/foto2.jpeg"
            alt="Lindsay personal trainer em atendimento"
            class="w-full rounded-[2rem] border-4 border-[#FCE4EC] object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  `,
})
export class AboutSectionComponent {
  @Input({ required: true }) content!: AboutContent;
}
