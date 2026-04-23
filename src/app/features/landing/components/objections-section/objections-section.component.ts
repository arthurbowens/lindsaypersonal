import { Component, Input } from '@angular/core';
import { ObjectionContent } from '../../models/landing-content.model';

@Component({
  selector: 'app-objections-section',
  standalone: true,
  template: `
    <section class="bg-[#FFFFFF]">
      <div class="mx-auto w-full max-w-6xl px-6 py-16">
        <div class="mx-auto max-w-3xl rounded-[2rem] border border-pink-100 bg-[#FCE4EC] p-8 text-center">
          <h2 class="text-3xl font-bold text-[#1A1A1A] md:text-4xl">Quebra de objeção</h2>
          <p class="mt-3 text-lg font-semibold text-[#E91E63]">{{ content.title }}</p>
          <p class="mt-2 text-[#1A1A1A]">{{ content.subtitle }}</p>

          <ul class="mt-6 space-y-2 text-left">
            @for (point of content.points; track point) {
              <li class="rounded-xl bg-white px-4 py-3 font-medium text-[#1A1A1A]">
                {{ point }}
              </li>
            }
          </ul>

          <p class="mt-6 font-semibold text-[#1A1A1A]">{{ content.conclusion }}</p>
        </div>
      </div>
    </section>
  `,
})
export class ObjectionsSectionComponent {
  @Input({ required: true }) content!: ObjectionContent;
}
