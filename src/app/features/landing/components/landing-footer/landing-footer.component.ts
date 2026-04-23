import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-footer',
  standalone: true,
  template: `
    <footer class="border-t border-pink-100 bg-[#FCE4EC]">
      <div
        class="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-[#1A1A1A] md:flex-row md:text-left"
      >
        <p>© {{ currentYear }} Lindsay Personal. Todos os direitos reservados.</p>
        <div class="flex items-center gap-3">
          <p>Treinamento feminino para emagrecimento, definição e força real.</p>
          <a
            [href]="instagramLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="inline-flex items-center justify-center rounded-full border border-[#E91E63] p-2 text-[#E91E63] transition hover:bg-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 fill-current">
              <path
                d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.6.2 1 .6 1.4 1 .4.4.8.8 1 1.4.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.6-.6 1-1 1.4-.4.4-.8.8-1.4 1-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5a4 4 0 0 1-1.4-1c-.4-.4-.8-.8-1-1.4-.2-.4-.4-1-.5-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.6.6-1 1-1.4.4-.4.8-.8 1.4-1 .4-.2 1-.4 2.2-.5 1.3-.1 1.7-.1 4.9-.1Zm0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.8.3 4 .6a6.2 6.2 0 0 0-2.3 1.5A6.2 6.2 0 0 0 .2 4.4C0 5.2-.2 6.1-.2 7.4-.3 8.7-.3 9.1-.3 12.4c0 3.3 0 3.7.1 5 .1 1.3.3 2.2.6 3a6.2 6.2 0 0 0 1.5 2.3 6.2 6.2 0 0 0 2.3 1.5c.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6a6.5 6.5 0 0 0 3.8-3.8c.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3a6.2 6.2 0 0 0-1.5-2.3A6.2 6.2 0 0 0 20 1c-.8-.3-1.7-.5-3-.6C15.7.3 15.3.3 12 .3Zm0 5.9A6.1 6.1 0 1 0 12 18a6.1 6.1 0 0 0 0-12.2Zm0 10A3.9 3.9 0 1 1 12 8a3.9 3.9 0 0 1 0 7.8Zm7.8-10.3a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z"
              />
            </svg>
          </a>
          <a
            [href]="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            class="inline-flex items-center justify-center rounded-full border border-[#25D366] p-2 text-[#25D366] transition hover:bg-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-4 w-4 fill-current">
              <path
                d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.5 0 .1 5.4.1 12c0 2.1.5 4.2 1.6 6L0 24l6.1-1.6a12 12 0 0 0 5.8 1.5h.1c6.6 0 12-5.4 12-12a11.8 11.8 0 0 0-3.5-8.4Zm-8.4 18.4a10 10 0 0 1-5.1-1.4l-.4-.2-3.6 1 1-3.5-.2-.4a10 10 0 0 1-1.6-5.3c0-5.5 4.5-10 10-10a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10Zm5.5-7.5c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2l-.9 1c-.2.3-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-1-1.6-2.1-1.8-2.5-.2-.3 0-.5.1-.7l.5-.5.3-.5c.1-.2.1-.4 0-.6l-1-2.3c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.6.1-.9.5-.3.4-1.2 1.1-1.2 2.8 0 1.6 1.1 3.2 1.3 3.4.2.2 2.3 3.6 5.6 5 .8.3 1.5.5 2 .6.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.7-.4Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class LandingFooterComponent {
  @Input({ required: true }) instagramLink!: string;
  @Input({ required: true }) whatsappLink!: string;
  protected readonly currentYear = new Date().getFullYear();
}
