/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from 'apps/immobilien-khatera-gross/src/app/shared/data-access/blog';
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
  ],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export default class BlogPostComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly blogService = inject(BlogService);

  protected readonly blogPost = toSignal(
    this.route.params.pipe(
      map(({ slug }) => slug),
      switchMap((slug) => this.blogService.blogPost(slug))
    )
  );
}
