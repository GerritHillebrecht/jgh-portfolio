import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotificationService } from './core/services/notification';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MatSnackBarModule],
  selector: 'kg-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly notificationService = inject(NotificationService);
  private readonly snackbar = inject(MatSnackBar);

  private readonly notificationEffect = effect(() => {
    const notification = this.notificationService.notification();
    if (notification) {
      this.snackbar.open(notification.message, 'Danke', {
        duration: 5000,
      });
    }
  });
}
