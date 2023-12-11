import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'kg-card-grid',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.scss',
})
export class CardGridComponent implements AfterViewInit {
  @ViewChildren('video')
  videos?: QueryList<ElementRef<HTMLVideoElement>>;

  ngAfterViewInit(): void {
    this.videos?.forEach((video) => {
      video.nativeElement.muted = true;
      video.nativeElement.loop = true;

      video.nativeElement.addEventListener('mouseover', () => {
        video.nativeElement.play();
        this.videos?.forEach((v) => {
          if (v.nativeElement !== video.nativeElement) {
            v.nativeElement.pause();
          }
        });
      });

      video.nativeElement.addEventListener('mouseout', () => {
        video.nativeElement.pause();
      });
    });
  }
}
