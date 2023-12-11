import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPreviewComponent } from '@ui-library/ui/blog';
import { BlogService } from '../../shared/data-access/blog';
import { MainButtonComponent } from '../../shared/ui/button/main-button.component';
import { SectionHeroHomeComponent } from './section/section-hero-home/section-hero-home.component';

@Component({
  selector: 'kg-landing',
  standalone: true,
  imports: [
    CommonModule,
    MainButtonComponent,
    SectionHeroHomeComponent,
    BlogPreviewComponent,
    RouterModule,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export default class LandingComponent {
  private readonly blogService = inject(BlogService);
  private readonly blogPostsRef = this.blogService.blogPosts({ pageSize: 4 });

  protected readonly blogPosts = computed(async () => {
    const blogPosts = await this.blogPostsRef();
    return blogPosts?.map(({ attributes }) => {
      const { Titel, slug, Vorschaubild } = attributes;
      return {
        title: Titel,
        slug,
        image: Vorschaubild.data.attributes.formats.medium.url,
      };
    });
  });
}
