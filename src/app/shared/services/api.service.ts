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
    const URL = this.BASE_URL + 'api/auth/login';
    return this.http.post<any>(URL, { username, password }).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  logout() {
    const URL = this.BASE_URL + 'api/auth/logout';
    return this.http.post<any>(URL,{}).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  getInstances() {
    // const URL = this.BASE_URL + 'api/ec2/instances';
    const URL = this.BASE_URL + 'api/aws/ec2/instances';
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }
  getRegions() {
    // const URL = this.BASE_URL + 'api/ec2/regions';
    const URL = this.BASE_URL + 'api/aws/ec2/regions';
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  createInstance(data: any) {
    const URL = this.BASE_URL + 'api/aws/stack';
    return this.http.post<any>(URL, data).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  getStacks(search?: string) {
    // const URL = this.BASE_URL + 'api/aws/stack';
    let URL = '';
    if (search) URL = this.BASE_URL + `api/aws/stack?search=${search}`;
    else URL = this.BASE_URL + 'api/aws/stack';

    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  createStack(data: any) {
    const URL = this.BASE_URL + 'api/aws/stack';
    return this.http.post<any>(URL, data).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  getStackEvents(stackName: string) {
    const URL = this.BASE_URL + `api/aws/stack-events?stack_name=${stackName}`;
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  getStackRequests(self: string) {
    const URL = this.BASE_URL + `api/aws/stack-request?self=${self}`;
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  getDeleteStack(stackName: string) {
    const URL = this.BASE_URL + `api/aws/delete-stack?stack_name=${stackName}`;
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  getDNSstatus(domainName: string) {
    const URL = this.BASE_URL + `api/dns/status?domain_name=${domainName}`;     
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }

  getProjectById(projectId: string) {
    const URL = this.BASE_URL + `api/project/project/${projectId}`;      
    return this.http.get<any>(URL).pipe(
      catchError(error => {
        this.handleError(error);
        return throwError(() => error);
      }));
  }
  
  handleError(error: any) {
    return throwError(() => error.errorMessage || `Error: ${error}`);
  }
}
