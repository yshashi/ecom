import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler){
    const myToken = localStorage.getItem('token');
    if(myToken){

      request = request.clone({
        setHeaders:{
          authorization: `Bearer ${myToken}`
        }
      });
    }
    console.log(request);
    return next.handle(request);
  }
}
