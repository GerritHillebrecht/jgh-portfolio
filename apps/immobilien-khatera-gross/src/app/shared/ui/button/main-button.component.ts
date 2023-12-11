import { Component, Input, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export type MainButtonOptions = {
  icon?: IconDefinition;
  size: 'small' | 'medium' | 'large';
  cta: boolean;
  disabled: boolean;
  showArrow: boolean;
};

@Component({
  selector: 'kg-main-button',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgIf],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss',
})
export class MainButtonComponent {
  protected readonly buttonOptions = signal<MainButtonOptions>({
    size: 'medium',
    cta: false,
    disabled: false,
    showArrow: true,
  });

  @Input()
  set options(options: Partial<MainButtonOptions>) {
    this.buttonOptions.update((defaults) => ({ ...defaults, ...options }));
  }

  protected readonly iconRight = signal(faArrowRight);
}
