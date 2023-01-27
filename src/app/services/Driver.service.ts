
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/Driver';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/ApiResponse';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ApiResponse<Driver[]>> {

    return this.http.get<ApiResponse<Driver[]>>(baseUrl);
  }

  get(id: any): Observable<ApiResponse<Driver>> {
    return this.http.get<ApiResponse<Driver>>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<ApiResponse<Driver[]>> {
    return this.http.get<ApiResponse<Driver[]>>(`${baseUrl}?title=${title}`);
  }
}

