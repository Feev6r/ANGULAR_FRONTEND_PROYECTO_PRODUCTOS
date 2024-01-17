import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';


export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)

  return next(req).pipe(catchError((error: HttpErrorResponse) =>{
      

    let errorMessage = "";

    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    }
    else{
      if(error.status === 401){
        router.navigate(['login'])
      }
      errorMessage = `${error.error}`; 
    }

    return throwError(() => errorMessage)
    
  }));

  
};
