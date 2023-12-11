import {
  Component,
  Input,
  inject,
  computed,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ScrollingService } from '@ui-library/service/scrolling';
import { Theme, ThemeService } from '../../service/theme';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainButtonComponent } from '../button/main-button.component';

export type NavLink = {
  path: string;
  label: string;
  exactMatch: boolean;
};

@Component({
  selector: 'kg-main-nabvar',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    MatTabsModule,
    FontAwesomeModule,
    MainButtonComponent,
  ],
  templateUrl: './main-nabvar.component.html',
  styleUrl: './main-nabvar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainNabvarComponent {
  @Input()
  links: NavLink[] = [
    {
      path: '',
      label: 'Home',
      exactMatch: true,
    },
    {
      path: '/blog',
      label: 'Blog',
      exactMatch: false,
    },
    {
      path: '/projects',
      label: 'Referenzen',
      exactMatch: false,
    },
    {
      path: '/me',
      label: 'Über mich',
      exactMatch: false,
    },
    {
      path: '/contact',
      label: 'Kontakt',
      exactMatch: false,
    },
  ];

  protected activeLink = this.links[0];

  protected readonly linkedIn = faLinkedin;
  private readonly scrollService = inject(ScrollingService);
  protected readonly scrolled = computed(
    () => this.scrollService.scrollDistance() > 0
  );

  private readonly themeService = inject(ThemeService);

  setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
