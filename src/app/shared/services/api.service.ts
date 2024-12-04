import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = environment.dataApiUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const URL = this.BASE_URL + 'login';
    return this.http.post<any>(URL, { username, password }).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  logout() {
    const URL = this.BASE_URL + 'logout';
    return this.http.post<any>(URL,{}).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  getInstances() {
    const URL = this.BASE_URL + 'api/ec2/instances';
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }
  getRegions() {
    const URL = this.BASE_URL + 'api/ec2/regions';
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  createInstance(data: any) {
    const URL = this.BASE_URL + 'api/ec2/launch';
    return this.http.post<any>(URL, data).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  handleError(error: any) {
    return throwError(() => error.errorMessage || `Error: ${error}`);
  }
}
