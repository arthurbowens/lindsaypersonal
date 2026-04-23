import { Component, Input } from '@angular/core';
import { ResultStat } from '../../models/landing-content.model';

@Component({
  selector: 'app-results-section',
  standalone: true,
  template: `
    <section id="resultados" class="bg-[#1A1A1A]">
      <div class="mx-auto w-full max-w-6xl px-6 py-16">
        <div class="mx-auto mb-10 max-w-2xl text-center">
          <p class="text-sm font-semibold uppercase tracking-wide text-pink-200">Resultados reais de mulheres reais</p>
          <h2 class="mt-2 text-3xl font-bold text-white md:text-4xl">
            Mais de 500 mulheres já conquistaram o corpo que queriam
          </h2>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          @for (stat of stats; track stat.label) {
            <div class="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <p class="text-3xl font-black text-[#E91E63]">{{ stat.value }}</p>
              <p class="mt-2 text-sm text-zinc-200">{{ stat.label }}</p>
            </div>
          }
        </div>

        <div class="mt-10 text-center">
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
export class ResultsSectionComponent {
  @Input({ required: true }) stats!: ResultStat[];
}
