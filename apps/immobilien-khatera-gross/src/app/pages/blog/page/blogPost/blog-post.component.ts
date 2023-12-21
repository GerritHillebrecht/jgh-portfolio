/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  BlogPost,
  BlogService,
} from 'apps/immobilien-khatera-gross/src/app/shared/data-access/blog';
import { AvatarBlockComponent } from 'apps/immobilien-khatera-gross/src/app/shared/ui/avatar-block/avatar-block.component';
import { MarkdownModule } from 'ngx-markdown';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'kg-blog-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule,
    AvatarBlockComponent,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FontAwesomeModule,
  ],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export default class BlogPostComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);
  private posts = this.blogService.allBlogPosts;

  protected readonly blogPost = toSignal(
    this.route.params.pipe(
      map(({ slug }) => slug),
      switchMap((slug) => this.blogService.blogPost(slug))
    )
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected blogpost: BlogPost | undefined;

  @Input() set slug(slug: string) {
    console.log('posts', this.posts());
    if (this.posts()) {
      this.blogpost = this.posts()!.find(
        (post) => post.attributes.slug === slug
      )?.attributes as BlogPost;
    }
    if (!this.posts()) {
      this.blogService
        .blogPost(slug)
        .subscribe((post) => (this.blogpost = post.attributes));
    }
  }
}
