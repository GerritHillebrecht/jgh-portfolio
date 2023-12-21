/* eslint-disable @nx/enforce-module-boundaries */
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverService } from '@ui-library/service/observer';

@Component({
  selector: 'ui-lib-split-image-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './split-image-content.component.html',
  styleUrl: './split-image-content.component.scss',
})
export class SplitImageContentComponent implements AfterViewInit {
  @ViewChild('figure')
  figure?: ElementRef<HTMLElement>;

  @Input()
  set reverse(reverse: boolean) {
    this.reverseOrder.set(reverse);
  }

  @Input({ required: true })
  image!: string;

  private readonly observer = inject(ObserverService).observer;

  protected reverseOrder = signal(false);

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.figure) {
        this.observer.observe(this.figure.nativeElement);
      }
    }, 1);
  }
}
