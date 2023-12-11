/* eslint-disable @nx/enforce-module-boundaries */
import { Component, signal } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MainButtonComponent } from 'apps/immobilien-khatera-gross/src/app/shared/ui/button/main-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChair, faCouch, faSpa } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'kg-section-hero-home',
  standalone: true,
  imports: [CommonModule, MainButtonComponent, FontAwesomeModule, NgFor],
  templateUrl: './section-hero-home.component.html',
  styleUrl: './section-hero-home.component.scss',
})
export class SectionHeroHomeComponent {
  protected readonly icons = signal([faChair, faCouch, faSpa]);
  protected readonly benefits = signal([
    {
      title: 'Verkauf',
      text: 'Unser Team staged Ihre Immobilie und erhöht die Vermarktbarkeit.',
      icon: this.icons()[0],
    },
    {
      title: 'Vermietung',
      text: 'Erhöhen Sie durch Home Staging die Attraktivität und finden Sie schneller Mieter.',
      icon: this.icons()[1],
    },
    {
      title: 'Ferienwohnung',
      text: 'Eine Ferienwohnung ist nur so gut wie die Bilder, die Sie zeigen. Wir helfen Ihnen dabei.',
      icon: this.icons()[2],
    },
  ]);
}
