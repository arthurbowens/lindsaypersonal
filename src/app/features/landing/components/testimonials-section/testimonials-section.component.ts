import { Component, Input } from '@angular/core';
import { Testimonial } from '../../models/landing-content.model';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  template: `
    <section class="bg-[#F5F5F5]">
      <div class="mx-auto w-full max-w-6xl px-6 py-16">
        <div class="mx-auto mb-10 max-w-2xl text-center">
          <p class="text-sm font-semibold uppercase tracking-wide text-[#E91E63]">Prova social</p>
          <h2 class="mt-2 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
            Resultados reais de mulheres reais
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          @for (testimonial of testimonials; track testimonial.name) {
            <article class="rounded-3xl bg-white p-6 shadow-sm">
              <p class="text-[#1A1A1A]">{{ testimonial.text }}</p>
              <p class="mt-4 text-sm font-semibold text-[#E91E63]">{{ testimonial.name }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsSectionComponent {
  @Input({ required: true }) testimonials!: Testimonial[];
}
