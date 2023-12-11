import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  Auth,
  authState,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly notification = inject(NotificationService);

  private readonly firestore = inject(Firestore);
  private readonly authState = toSignal(authState(this.auth));
  //

  async signInWithEmailAndPassword(email: string, password: string) {
    const credentials = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    if (credentials) {
      return this.router.navigate(['']);
    }

    return this.notification.updateNotification({
      title: 'Anmeldung fehlgeschlagen',
      message:
        'Die Anmeldung ist fehlgeschlagen. Bitte versuchen Sie es erneut.',
      type: 'error',
    });
  }

  async signOut() {
    await this.auth.signOut();
    return this.router.navigate(['auth']);
  }
}
