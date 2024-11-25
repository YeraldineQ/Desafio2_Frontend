import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  private apiUrl = 'http://localhost:8081/api/auth';
  constructor(private http: HttpClient) {}

  // Método para registrar un usuario
  registerUser(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/register`, userData, {
      headers,
      responseType: 'text',
    }); // <-- Especifica 'text'
  }
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/authenticate`, body, { headers });
  }
}
