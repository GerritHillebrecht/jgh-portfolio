import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../core/services/authentication';
import { MainButtonComponent } from '../../shared/ui/button/main-button.component';

@Component({
  selector: 'kg-auth',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MainButtonComponent,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export default class AuthComponent {
  private readonly auth = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  protected readonly authForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  protected get email() {
    return this.authForm.get('email');
  }

  protected get password() {
    return this.authForm.get('password');
  }

  protected signIn() {
    const { email, password } = this.authForm.value;

    if (!email || !password || !this.authForm.valid) {
      return this.authForm.markAllAsTouched();
    }

    this.auth.signInWithEmailAndPassword(email, password);
  }
}
