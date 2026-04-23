import { Component, Input } from '@angular/core';
import { ProblemContent } from '../../models/landing-content.model';

@Component({
  selector: 'app-problem-section',
  standalone: true,
  template: `
    <section class="bg-[#FFFFFF]">
      <div class="mx-auto w-full max-w-6xl px-6 py-16">
        <div class="mx-auto max-w-3xl space-y-6 text-center">
          <h2 class="text-3xl font-bold text-[#1A1A1A] md:text-4xl">{{ content.title }}</h2>
          <p class="text-lg font-semibold text-[#E91E63]">{{ content.intro }}</p>

          <ul class="space-y-3 text-left">
            @for (point of content.painPoints; track point) {
              <li class="rounded-2xl bg-[#FCE4EC] px-5 py-4 font-medium text-[#1A1A1A]">
                {{ point }}
              </li>
            }
          </ul>

          <p class="text-xl font-bold text-[#1A1A1A]">{{ content.conclusion }}</p>

          <a
            href="#contato"
            class="inline-flex rounded-full bg-[#E91E63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#d61b5b]"
          >
            Quero começar agora
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProblemSectionComponent {
  @Input({ required: true }) content!: ProblemContent;
}
