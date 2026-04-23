import { Component, Input } from '@angular/core';
import { CtaContent } from '../../models/landing-content.model';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  template: `
    <section id="contato" class="bg-[#FFFFFF]">
      <div class="mx-auto w-full max-w-4xl px-6 py-16">
        <div
          class="rounded-[2rem] bg-[#E91E63] px-8 py-12 text-center text-white shadow-2xl"
        >
          <h2 class="text-3xl font-bold md:text-4xl">{{ content.title }}</h2>
          <p class="mx-auto mt-4 max-w-2xl text-pink-100">{{ content.subtitle }}</p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contato"
              class="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#E91E63] transition hover:bg-[#FCE4EC]"
            >
              {{ content.primaryAction }}
            </a>
            <a
              [href]="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 fill-current">
                <path
                  d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.5 4.2 1.6 6L0 24l6.1-1.6a12 12 0 0 0 5.8 1.5h.1c6.6 0 12-5.4 12-12a11.8 11.8 0 0 0-3.5-8.4Zm-8.4 18.4a10 10 0 0 1-5.1-1.4l-.4-.2-3.6 1 1-3.5-.2-.4a10 10 0 0 1-1.6-5.3c0-5.5 4.5-10 10-10a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10Zm5.5-7.5c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2l-.9 1c-.2.3-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-1-1.6-2.1-1.8-2.5-.2-.3 0-.5.1-.7l.5-.5.3-.5c.1-.2.1-.4 0-.6l-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.5-.3.4-1.2 1.1-1.2 2.8 0 1.6 1.1 3.2 1.3 3.4.2.2 2.3 3.6 5.6 5 .8.3 1.5.5 2 .6.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.7-.4Z"
                />
              </svg>
              {{ content.secondaryAction }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaSectionComponent {
  @Input({ required: true }) content!: CtaContent;
  @Input({ required: true }) whatsappLink!: string;
}
