import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html'
})
export class LoginPage {

  email = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async login() {
    try {
      const res = await this.auth.login({
        email: this.email,
        password: this.password
      });

      localStorage.setItem('token', res.data.token);
      this.router.navigate(['/welcome']);

    } catch (err) {
      this.error = 'Invalid Email or Password';
    }
  }
}