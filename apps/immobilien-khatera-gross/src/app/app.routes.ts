import { Route } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layout/content-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/landing/landing.component'),
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog.component'),
      },
      {
        path: 'blog/:slug',
        loadComponent: () =>
          import('./pages/blog/page/blogPost/blog-post.component'),
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/reference/reference.component'),
      },
      {
        path: 'projects/:slug',
        loadComponent: () =>
          import(
            './pages/reference/page/reference-detailed/reference-detailed.component'
          ),
      },
      {
        path: 'me',
        loadComponent: () => import('./pages/about/about.component'),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component'),
      },
      {
        path: 'books',
        loadComponent: () => import('./pages/books/books.component'),
      },
      {
        path: 'books/:id',
        loadComponent: () =>
          import('./pages/books/page/book-detailed/book-detailed.component'),
      },
    ],
    canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth.component'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
