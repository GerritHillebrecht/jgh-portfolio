import {
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
} from '@angular/core';
import {
  ScreenTrackingService,
  UserTrackingService,
  getAnalytics,
  provideAnalytics,
} from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  enableIndexedDbPersistence,
  getFirestore,
  provideFirestore,
} from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { withViewTransitions } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      inMemoryScrollingFeature,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    provideAnimations(),
    importProvidersFrom([
      HttpClientModule,
      MarkdownModule.forRoot(),
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'chatera-gross',
          appId: '1:629224315478:web:6e7a2759e1aa6894e739f7',
          storageBucket: 'chatera-gross.appspot.com',
          // locationId: 'europe-west',
          apiKey: 'AIzaSyCabEgVH6um9DFSLPHBE7-vUhyljHZLuS0',
          authDomain: 'chatera-gross.firebaseapp.com',
          messagingSenderId: '629224315478',
          measurementId: 'G-QDKH73HBT3',
        })
      ),
      provideAuth(() => getAuth()),
      provideAnalytics(() => getAnalytics()),
      provideFirestore(() => {
        const firestore = getFirestore();
        enableIndexedDbPersistence(firestore);
        return firestore;
      }),
      provideMessaging(() => getMessaging()),
      providePerformance(() => getPerformance()),
      provideStorage(() => getStorage()),
    ]),
    ScreenTrackingService,
    UserTrackingService,
    {
      provide: LOCALE_ID,
      useValue: 'de-DE',
    },
  ],
};
