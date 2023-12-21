/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable, inject } from '@angular/core';
import { StrapiService, QueryParams } from '@data-access/strapi';
import { map } from 'rxjs/operators';
import { Reference } from './project.model';
import { environment } from 'apps/immobilien-khatera-gross/src/environments/environment';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly strapi = inject(StrapiService);

  private readonly projectsObservable = this.strapi
    .fetchData<Reference>({
      path: 'references',
      query: {
        populate: ['Bilder'],
        sortBy: 'publishedAt',
        sortOrder: 'desc',
      },
      server: environment.backend_server,
    })
    .pipe(map((data) => data.data));

  public readonly allProjects = toSignal(this.projectsObservable);

  projects({ page, pageSize }: Partial<QueryParams> = {}) {
    return this.strapi
      .fetchData<Reference>({
        path: 'references',
        query: {
          populate: ['Bilder'],
          sortBy: 'publishedAt',
          sortOrder: 'desc',
          page,
          pageSize,
        },
        server: environment.backend_server,
      })
      .pipe(map((data) => data.data));
  }

  project(slug: string) {
    return this.strapi
      .fetchData<Reference>({
        path: 'references',
        query: {
          populate: ['Bilder'],
          slug,
        },
        server: environment.backend_server,
      })
      .pipe(map((data) => data.data[0]));
  }
}

// query: '?populate=Bilder&sort[0]=publishedAt:desc',
// query: `?populate=Bilder&filters[slug][$eq]=${slug}&populate=Bilder`,
