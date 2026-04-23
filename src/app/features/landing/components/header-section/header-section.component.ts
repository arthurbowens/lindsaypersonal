import { Component, Input } from '@angular/core';
import { HeaderContent } from '../../models/landing-content.model';

@Component({
  selector: 'app-header-section',
  standalone: true,
  template: `
    <header class="sticky top-0 z-30 border-b border-pink-100 bg-white/95 backdrop-blur">
      <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div class="leading-tight">
          <p class="text-base font-black tracking-tight text-[#1A1A1A] sm:text-lg">{{ content.brandTitle }}</p>
          <p class="text-[11px] font-medium uppercase tracking-[0.16em] text-[#E91E63] sm:text-xs">
            Treinamento feminino
          </p>
        </div>

        <a
          [href]="content.instagramLink"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#E91E63] p-2 text-[#E91E63] transition hover:bg-[#FCE4EC]"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" class="h-5 w-5 fill-current">
            <path
              d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.6.2 1 .6 1.4 1 .4.4.8.8 1 1.4.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.6-.6 1-1 1.4-.4.4-.8.8-1.4 1-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5a4 4 0 0 1-1.4-1c-.4-.4-.8-.8-1-1.4-.2-.4-.4-1-.5-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.6.6-1 1-1.4.4-.4.8-.8 1.4-1 .4-.2 1-.4 2.2-.5 1.3-.1 1.7-.1 4.9-.1Zm0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.8.3 4 .6a6.2 6.2 0 0 0-2.3 1.5A6.2 6.2 0 0 0 .2 4.4C0 5.2-.2 6.1-.2 7.4-.3 8.7-.3 9.1-.3 12.4c0 3.3 0 3.7.1 5 .1 1.3.3 2.2.6 3a6.2 6.2 0 0 0 1.5 2.3 6.2 6.2 0 0 0 2.3 1.5c.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6a6.5 6.5 0 0 0 3.8-3.8c.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3a6.2 6.2 0 0 0-1.5-2.3A6.2 6.2 0 0 0 20 1c-.8-.3-1.7-.5-3-.6C15.7.3 15.3.3 12 .3Zm0 5.9A6.1 6.1 0 1 0 12 18a6.1 6.1 0 0 0 0-12.2Zm0 10A3.9 3.9 0 1 1 12 8a3.9 3.9 0 0 1 0 7.8Zm7.8-10.3a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z"
            />
          </svg>
        </a>
      </div>
    </header>
  `,
})
export class HeaderSectionComponent {
  @Input({ required: true }) content!: HeaderContent;
}
