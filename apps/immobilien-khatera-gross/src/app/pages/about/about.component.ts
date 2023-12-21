import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlockQuote, BlockquoteComponent } from '@ui-library/ui/blockquote';
import { MainButtonComponent } from '../../shared/ui/button/main-button.component';
import { SplitImageContentComponent } from '@ui-library/ui/grids/split-image-content';

@Component({
  selector: 'kg-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BlockquoteComponent,
    MainButtonComponent,
    SplitImageContentComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent {
  protected readonly quote = signal<BlockQuote>({
    quote:
      'Design ist nicht nur, wie es aussieht und sich anfühlt. Design ist, wie es funktioniert',
    author: 'Steve Jobs',
    position: 'Mitbegründer von Apple Inc.',
  });
}
