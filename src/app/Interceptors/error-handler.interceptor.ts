import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

//atrapamos los errores en respuesta a una solicitud basicamente
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router)
  const cookie = inject(CookieService)

  return next(req).pipe(catchError((error: HttpErrorResponse) => {

    let errorMessage = "";

    //Error frontend
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    }
    else { //Error backend
      if (error.status === 401) {


        //si existe se pone en 0 para poder hacer login
        if (cookie.check("UserSession")) {
          cookie.set("UserSession", "0", undefined, undefined, undefined, true, "None");
        }
        router.navigate(['login'])

      }
      errorMessage = `${error.error.message}`;
    }

    return throwError(() => errorMessage)

  }))

};