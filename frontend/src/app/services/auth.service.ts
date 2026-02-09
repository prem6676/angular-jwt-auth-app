import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class AuthService {

  api = 'http://localhost:5000/api/auth';

  login(data: any) {
    return axios.post(`${this.api}/login`, data);
  }

  register(data: any) {
    return axios.post(`${this.api}/register`, data);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}