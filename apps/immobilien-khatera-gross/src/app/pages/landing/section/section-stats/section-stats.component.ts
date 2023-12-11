/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from 'apps/immobilien-khatera-gross/src/app/shared/ui/button/main-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'kg-section-stats',
  standalone: true,
  imports: [CommonModule, MainButtonComponent, RouterModule],
  templateUrl: './section-stats.component.html',
  styleUrl: './section-stats.component.scss',
})
export class SectionStatsComponent {}
