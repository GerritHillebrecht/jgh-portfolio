import { Injectable, signal } from '@angular/core';

export interface Notification {
  title: string;
  message: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public readonly notification = signal<Notification | null>(null);

  updateNotification(updatedNotification: Notification) {
    this.notification.update(() => updatedNotification);
  }
}
