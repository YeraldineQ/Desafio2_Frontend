import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:8081/api/categoria';
  constructor(private http: HttpClient) { }

  getCategories (): Observable <any>{
    const token = localStorage.getItem('authToken');
    console.log("Token", token);
    const headers = new HttpHeaders ({
     
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(this.apiUrl);
  }
}