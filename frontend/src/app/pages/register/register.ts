import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class RegisterPage {

  user: any = {};
  confirmPassword = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async register() {

    if (this.user.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    try {
      await this.auth.register(this.user);
      this.router.navigate(['/login']);
    } catch (err) {
      this.error = 'Registration Failed';
    }
  }
}