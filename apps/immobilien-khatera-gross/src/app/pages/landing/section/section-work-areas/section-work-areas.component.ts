/* eslint-disable @nx/enforce-module-boundaries */
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { StrapiImage, StrapiService } from '@data-access/strapi';
import { ObserverService } from '@ui-library/service/observer';
import { environment } from 'apps/immobilien-khatera-gross/src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Swiper } from 'swiper';
import {
  Controller,
  EffectCreative,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper/modules';

type HomeStagingBereich = {
  Bereichsname: string;
  Beschreibung: string;
  Hintergrundbild: StrapiImage;
  slug: string;
};

@Component({
  selector: 'kg-section-work-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-work-areas.component.html',
  styleUrl: './section-work-areas.component.scss',
})
export class SectionWorkAreasComponent {
  @ViewChildren('avatar')
  avatarsRef?: QueryList<ElementRef<HTMLDivElement>>;

  protected readonly currentSlide = signal(0);

  private readonly observer = inject(ObserverService).observer;

  private readonly strapi = inject(StrapiService);

  protected readonly slides = toSignal(
    this.strapi
      .fetchData<HomeStagingBereich>({
        path: 'staging-bereiches',
        query: {
          populate: ['Hintergrundbild'],
        },
        server: environment.backend_server,
      })
      .pipe(
        map((data) => data.data),
        tap((bereiche) => console.log('bereiche', bereiche)),
        tap(() => {
          setTimeout(() => {
            if (this.avatarsRef) {
              this.avatarsRef.forEach((avatar) => {
                this.observer.observe(avatar.nativeElement);
              });
              this.swiper.init();
              this.swiperText.init();
            }
          }, 1);
        })
      )
  );

  private swiper = new Swiper('.swiper-image', {
    // configure Swiper to use modules
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      slideChange: () => {
        this.currentSlide.set(this.swiper.activeIndex);
      },
    },
    modules: [Pagination, Controller],
  });

  private swiperText = new Swiper('.swiper-text', {
    // configure Swiper to use modules
    controller: {
      control: this.swiper,
    },
    // navigation: {
    //   nextEl: '.btn-next-text',
    //   prevEl: '.btn-prev-text',
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    effect: 'creative',
    creativeEffect: {
      prev: {
        opacity: 0,
        translate: [0, '100%', 0],
      },
      next: {
        opacity: 0,
        translate: [0, '-100%', 0],
      },
    },
    on: {
      slideChange: () => {
        this.currentSlide.set(this.swiperText.activeIndex);
      },
    },
    modules: [Controller, Navigation, EffectCreative, Keyboard],
  });

  protected selectIndex(index: number): void {
    this.swiperText.slideTo(index);
  }
}
