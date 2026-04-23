import { Component, Input } from '@angular/core';
import { ProgramPillar } from '../../models/landing-content.model';

@Component({
  selector: 'app-pillars-section',
  standalone: true,
  template: `
    <section id="metodo" class="bg-[#FCE4EC]">
      <div class="mx-auto w-full max-w-6xl px-6 py-16">
        <div class="mx-auto mb-10 max-w-2xl text-center">
          <p class="text-sm font-semibold uppercase tracking-wide text-[#E91E63]">Método Lindsay</p>
          <h2 class="mt-2 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            Treinamento com foco no que realmente transforma
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          @for (pillar of pillars; track pillar.title) {
            <article class="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
              <h3 class="text-xl font-semibold text-[#1A1A1A]">{{ pillar.title }}</h3>
              <p class="mt-3 text-[#1A1A1A]">{{ pillar.description }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class PillarsSectionComponent {
  @Input({ required: true }) pillars!: ProgramPillar[];
}
