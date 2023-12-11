import { CommonModule, NgFor, NgIf } from '@angular/common';
import {
  Component,
  Input,
  signal
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPreviewItemComponent } from './blog-preview-item/blog-preview-item.component';

export type BlogPost = {
  title: string;
  slug: string;
  image: string;
};

export type BlogPreviewProps = {
  forwardURI: string;
};

@Component({
  selector: 'ui-lib-blog-preview',
  standalone: true,
  imports: [CommonModule, BlogPreviewItemComponent, RouterModule, NgFor, NgIf],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.scss',
})
export class BlogPreviewComponent {
  protected readonly _blogPosts = signal<BlogPost[] | undefined>(undefined);
  protected readonly blogOptions = signal<BlogPreviewProps>({
    forwardURI: '/blog',
  });

  @Input()
  set options(options: Partial<BlogPreviewProps>) {
    this.blogOptions.update((prev) => ({ ...prev, ...options }));
  }

  @Input()
  set blogPosts(posts: BlogPost[]) {
    this._blogPosts.set(posts);
  }
}
