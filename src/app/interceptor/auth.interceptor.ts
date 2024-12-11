import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token =localStorage.getItem('token')  
    const newHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    });
    let clone = request.clone({ headers: newHeaders });
    // console.log(clone);
    return next.handle(clone);
  }
}
