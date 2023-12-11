import {
  AfterViewInit,
  Component,
  PLATFORM_ID,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ui-lib-collapsable-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapsable-list.component.html',
  styleUrl: './collapsable-list.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class CollapsableListComponent implements AfterViewInit {
  private readonly platformID = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformID);

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      window.onmousemove = (e) => addPenacheToCursor(e);
    }
  }
}

function addPenacheToCursor(e: MouseEvent) {
  const penache = document.createElement('div');
  penache.classList.add('penache');
  penache.classList.add('fall-1');
  penache.style.left = e.pageX + 'px';
  penache.style.top = e.pageY + 'px';
  document.body.appendChild(penache);
  setTimeout(() => document.body.removeChild(penache), 500);
}
