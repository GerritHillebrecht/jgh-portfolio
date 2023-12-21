/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { QueryParams, StrapiService } from '@data-access/strapi';
import { environment } from 'apps/immobilien-khatera-gross/src/environments/environment';
import { map } from 'rxjs/operators';
import { BlogPost } from './blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly strapi = inject(StrapiService);
  private readonly blogPostsObservable = this.strapi
    .fetchData<BlogPost>({
      path: 'blogentries',
      query: {
        populate: ['Vorschaubild'],
        sortBy: 'publishedAt',
        sortOrder: 'desc',
      },
      server: environment.backend_server,
    })
    .pipe(map(({ data }) => data));

  public readonly allBlogPosts = toSignal(this.blogPostsObservable);

  blogPosts({ page, pageSize }: Partial<QueryParams> = {}) {
    return toSignal(
      this.strapi
        .fetchData<BlogPost>({
          path: 'blogentries',
          query: {
            populate: ['Vorschaubild'],
            sortBy: 'publishedAt',
            sortOrder: 'desc',
            page,
            pageSize,
          },
          server: environment.backend_server,
        })
        .pipe(map(({ data }) => data))
    );
  }

  blogPost(slug: string) {
    return this.strapi
      .fetchData<BlogPost>({
        path: `blogentries`,
        query: {
          populate: ['Vorschaubild'],
          slug,
        },
        server: environment.backend_server,
      })
      .pipe(map((data) => data.data[0]));
  }
}

// `?populate=Vorschaubild&sort[0]=publishedAt:desc${
//   pageSize ?? `pageSize=${pageSize}`
// }`,
