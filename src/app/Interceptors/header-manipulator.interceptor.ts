import { HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const headerManipulatorInterceptor: HttpInterceptorFn = (req, next) => {

  //Retornamos cada solicitud con el csrf token almacenado
  function ReturnRequestWithHeaders(req: HttpRequest<unknown>) {

    //cuando se envia la solicitud
    return next(req).pipe(tap(event => {

      //cuando se recive una respuesta
      if (event instanceof HttpResponse) {

        const csrfToken = event.headers.get('X-CSRF-Token');

        if (csrfToken !== null) {
          localStorage.setItem('CSRF-TOKEN', csrfToken);
        }
      }

    }))
  }



  const modifiedRequest = req.clone({
    setHeaders: {
      //'Content-Type': 'application/json',
      'X-CSRF-TOKEN': localStorage.getItem('CSRF-TOKEN') !== null ? localStorage.getItem('CSRF-TOKEN')! : ""
    }
  });

  return ReturnRequestWithHeaders(modifiedRequest);

};


