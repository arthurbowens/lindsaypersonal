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
            [href]="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-full bg-[#E91E63] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#d61b5b]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 fill-current">
              <path
                d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.5 4.2 1.6 6L0 24l6.1-1.6a12 12 0 0 0 5.8 1.5h.1c6.6 0 12-5.4 12-12a11.8 11.8 0 0 0-3.5-8.4Zm-8.4 18.4a10 10 0 0 1-5.1-1.4l-.4-.2-3.6 1 1-3.5-.2-.4a10 10 0 0 1-1.6-5.3c0-5.5 4.5-10 10-10a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10Zm5.5-7.5c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2l-.9 1c-.2.3-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-1-1.6-2.1-1.8-2.5-.2-.3 0-.5.1-.7l.5-.5.3-.5c.1-.2.1-.4 0-.6l-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.5-.3.4-1.2 1.1-1.2 2.8 0 1.6 1.1 3.2 1.3 3.4.2.2 2.3 3.6 5.6 5 .8.3 1.5.5 2 .6.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.7-.4Z"
              />
            </svg>
            Quero começar agora
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ProblemSectionComponent {
  @Input({ required: true }) content!: ProblemContent;
  @Input({ required: true }) whatsappLink!: string;
}
