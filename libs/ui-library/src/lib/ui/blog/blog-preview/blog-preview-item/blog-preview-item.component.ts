import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogPost } from '../blog-preview.component';
import { ObserverService } from '../../../../service/observer';

@Component({
  selector: 'ui-lib-blog-preview-item',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIf],
  templateUrl: './blog-preview-item.component.html',
  styleUrl: './blog-preview-item.component.scss',
})
export class BlogPreviewItemComponent implements AfterViewInit {
  @ViewChild('post')
  postRef?: ElementRef<HTMLAnchorElement>;

  protected readonly _post = signal<BlogPost | undefined>(undefined);
  private readonly observer = inject(ObserverService).observer;

  @Input()
  set post(post: BlogPost) {
    this._post.set(post);
  }

  @Input() index = 0;
  @Input() forwardURI = '/blog';

  ngAfterViewInit(): void {
    if (!this.postRef) return;
    this.observer.observe(this.postRef.nativeElement);
  }
}
