import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogPreviewComponent } from '@ui-library/ui/blog';
import { ImageInfoGridComponent } from '@ui-library/ui/grids/image-info-grid';
import { BlogService } from '../../shared/data-access/blog';
import { QuoteService } from '../../shared/data-access/quote';
import { MainButtonComponent } from '../../shared/ui/button/main-button.component';
import { infoBoxes } from './constants/constants';
import { SectionHeroHomeComponent } from './section/section-hero-home/section-hero-home.component';
import { SectionStatsComponent } from './section/section-stats/section-stats.component';
import { SectionWorkAreasComponent } from './section/section-work-areas/section-work-areas.component';
import { SplitImageContentComponent } from '@ui-library/ui/grids/split-image-content';
import { BlockquoteComponent } from '@ui-library/ui/blockquote';

@Component({
  selector: 'kg-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MainButtonComponent,
    BlogPreviewComponent,
    ImageInfoGridComponent,
    BlockquoteComponent,
    SectionHeroHomeComponent,
    SectionStatsComponent,
    SectionWorkAreasComponent,
    SplitImageContentComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export default class LandingComponent {
  private readonly quoteService = inject(QuoteService);
  private readonly blogService = inject(BlogService);
  private readonly blogPostsRef = this.blogService.blogPosts({ pageSize: 4 });

  protected readonly infoBoxes = signal(infoBoxes);

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

  protected readonly blockquotes = this.quoteService.quotes();
}
