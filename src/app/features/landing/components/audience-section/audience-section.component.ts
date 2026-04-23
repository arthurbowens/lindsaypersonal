import { Component, Input } from '@angular/core';
import { AudienceContent } from '../../models/landing-content.model';

@Component({
  selector: 'app-audience-section',
  standalone: true,
  template: `
    <section class="bg-[#FFFFFF]">
      <div class="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 class="text-center text-3xl font-bold text-[#1A1A1A] md:text-4xl">{{ content.title }}</h2>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div class="rounded-3xl border border-pink-100 bg-[#FCE4EC] p-6">
            <p class="text-xl font-bold text-[#1A1A1A]">Para quem é</p>
            <ul class="mt-4 space-y-2">
              @for (item of content.forWho; track item) {
                <li class="font-medium text-[#1A1A1A]">{{ item }}</li>
              }
            </ul>
          </div>

          <div class="rounded-3xl border border-zinc-200 bg-[#F5F5F5] p-6">
            <p class="text-xl font-bold text-[#1A1A1A]">Para quem não é</p>
            <p class="mt-4 font-medium text-[#1A1A1A]">{{ content.notForWho }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AudienceSectionComponent {
  @Input({ required: true }) content!: AudienceContent;
}
