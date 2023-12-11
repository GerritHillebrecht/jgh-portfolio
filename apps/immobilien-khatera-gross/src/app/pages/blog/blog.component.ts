import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { AvatarComponent, AvatarOptions } from '@ui-library/ui/avatar';
import { MarkdownModule } from 'ngx-markdown';
import { BlogService } from '../../shared/data-access/blog';
import { MainButtonComponent } from '../../shared/ui/button/main-button.component';

@Component({
  selector: 'kg-blog',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    RouterModule,
    MarkdownModule,
    AvatarComponent,
    MainButtonComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export default class BlogComponent {
  private readonly blogService = inject(BlogService);
  protected readonly blogPosts = this.blogService.blogPosts();
  protected readonly avatarOptions = signal<AvatarOptions>({
    size: '3rem',
    borderWidth: '1px',
    borderColor: '#ccc',
    imageSize: '100%',
    imagePosition: 'cover',
  });
}
