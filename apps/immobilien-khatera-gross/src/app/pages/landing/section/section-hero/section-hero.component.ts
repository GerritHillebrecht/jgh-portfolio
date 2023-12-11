/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainButtonComponent } from 'apps/immobilien-khatera-gross/src/app/shared/ui/button/main-button.component';
import { CardGridComponent } from 'apps/immobilien-khatera-gross/src/app/shared/ui/visuals/card-grid';
import { StackingCardsComponent } from 'apps/immobilien-khatera-gross/src/app/shared/ui/visuals/stacking-cards';

@Component({
  selector: 'kg-section-hero',
  standalone: true,
  imports: [
    CommonModule,
    StackingCardsComponent,
    CardGridComponent,
    MainButtonComponent,
  ],
  templateUrl: './section-hero.component.html',
  styleUrl: './section-hero.component.scss',
})
export class SectionHeroComponent {}
