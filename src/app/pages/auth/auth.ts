
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  isLogin = true;

  showLoginPassword = false;
  showRegisterPassword = false;
  showConfirmPassword = false;

  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  registerData = {
    fullName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private router: Router) {}

  switchMode(loginMode: boolean): void {
    this.isLogin = loginMode;
    this.message = '';
  }

  onMobileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
    this.registerData.mobile = input.value;
  }

  submitLogin(): void {
    debugger;
    this.message = '';

    if (!this.loginData.email || !this.loginData.password) {
      this.showMessage(
        'Please enter email and password.',
        'error'
      );
      return;
    }

    // Demo navigation only; real authentication needs a backend API.
    this.router.navigate(['/dashboard']);
  }

  submitRegister(): void {
    this.message = '';

    if (
      !this.registerData.fullName.trim() ||
      !this.registerData.mobile ||
      !this.registerData.email ||
      !this.registerData.password ||
      !this.registerData.confirmPassword
    ) {
      this.showMessage(
        'Please fill in all required fields.',
        'error'
      );
      return;
    }

    if (!/^[0-9]{10}$/.test(this.registerData.mobile)) {
      this.showMessage(
        'Enter a valid 10-digit mobile number.',
        'error'
      );
      return;
    }

    if (this.registerData.password.length < 8) {
      this.showMessage(
        'Password must contain at least 8 characters.',
        'error'
      );
      return;
    }

    if (
      this.registerData.password !==
      this.registerData.confirmPassword
    ) {
      this.showMessage(
        'Passwords do not match.',
        'error'
      );
      return;
    }

    this.showMessage(
      'Registration validated. Backend API is not connected yet.',
      'success'
    );
  }

  private showMessage(
    text: string,
    type: 'success' | 'error'
  ): void {
    this.message = text;
    this.messageType = type;
  }
}
