import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverService } from '@ui-library/service/observer';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs/operators';
import { ProjectsService } from '../../shared/data-access/projects';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'kg-reference',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export default class ReferenceComponent {
  @ViewChildren('project')
  projectsRef?: QueryList<ElementRef<HTMLAnchorElement>>;

  private readonly observer = inject(ObserverService).observer;
  private readonly breakpointObserver = inject(BreakpointObserver);
  protected readonly isSmall = toSignal(
    this.breakpointObserver
      .observe(['(max-width: 640px)'])
      .pipe(map((result) => result.matches))
  );

  private readonly projectService = inject(ProjectsService);
  protected readonly allReferences = this.projectService.allProjects;

  protected readonly references = toSignal(
    this.projectService.projects().pipe(
      tap(() => {
        setTimeout(() => {
          this.projectsRef?.forEach((project) => {
            this.observer.observe(project.nativeElement);
          });
        }, 1);
      })
    )
  );
}
