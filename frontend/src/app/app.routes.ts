import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login';
import { RegisterPage } from './pages/register/register';
import { WelcomePage } from './pages/welcome/welcome';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },

  {
    path: 'welcome',
    component: WelcomePage,
    canActivate: [authGuard]
  },

  { path: '**', redirectTo: 'login' }
];