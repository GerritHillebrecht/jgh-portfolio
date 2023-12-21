/* eslint-disable @nx/enforce-module-boundaries */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverService } from '@ui-library/service/observer';

/**
 * Blockquote component
 * @quote
 * @author
 * @position
 */
export interface BlockQuote {
  quote: string;
  author: string;
  position?: string;
}

@Component({
  selector: 'ui-lib-blockquote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blockquote.component.html',
  styleUrl: './blockquote.component.scss',
})
export class BlockquoteComponent implements AfterViewInit {
  @ViewChild('quote')
  quote: ElementRef<HTMLParagraphElement> | undefined;

  @Input({ required: true })
  blockquote!: BlockQuote;

  private readonly observer = inject(ObserverService).observer;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.quote) {
        this.observer.observe(this.quote.nativeElement);
      }
    }, 1);
  }
}
