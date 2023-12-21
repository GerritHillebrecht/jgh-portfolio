/* eslint-disable @nx/enforce-module-boundaries */
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'apps/immobilien-khatera-gross/src/app/shared/data-access/projects';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs/operators';
import { AvatarOptions } from '@ui-library/ui/avatar';

import {
  EquirectProjection,
  NgxView360Module,
  View360Options,
} from '@egjs/ngx-view360';
import { MarkdownModule } from 'ngx-markdown';
import { AvatarBlockComponent } from 'apps/immobilien-khatera-gross/src/app/shared/ui/avatar-block/avatar-block.component';
import { GlasBorderComponent } from '@ui-library/ui/glas-border';

@Component({
  selector: 'kg-reference-detailed',
  standalone: true,
  imports: [
    CommonModule,
    NgxView360Module,
    MarkdownModule,
    AvatarBlockComponent,
    GlasBorderComponent,
  ],
  templateUrl: './reference-detailed.component.html',
  styleUrl: './reference-detailed.component.scss',
})
export default class ReferenceDetailedComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly projectsService = inject(ProjectsService);

  protected readonly project = toSignal(
    this.route.params.pipe(
      map(({ slug }) => slug),
      switchMap((slug) => {
        return this.projectsService.project(slug);
      })
    )
  );

  protected readonly avatarOptions: AvatarOptions = {
    size: '3rem',
    borderWidth: '1px',
    borderColor: '#ccc',
    imageSize: '100%',
    imagePosition: 'cover',
  };

  protected readonly options: Partial<View360Options> = {
    projection: new EquirectProjection({
      src: 'assets/images/tiles/004.jpg',
    }),
    scrollable: true,
    wheelScrollable: true,
    // initialZoom: 0,
    // autoplay: {
    //   speed: 0.25,
    //   pauseOnHover: false,
    // },
  };
}
