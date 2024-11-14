import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://localhost:8081/api/auth/register';
constructor(private http: HttpClient) {}

// Método para registrar un usuario
registerUser(userData: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.apiUrl, userData, { headers, responseType: 'text'
}); // <-- Especifica 'text'
}
}