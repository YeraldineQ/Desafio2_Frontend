import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class OpportunitiesService {

  private apiUrl = 'http://localhost:8081/api/oportunidades';
  constructor(private http: HttpClient, private authService: AuthService) { }

  getOpportunities(): Observable<any>{
    const token = this.authService['getToken'];
        const headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(this.apiUrl);

  }
}
