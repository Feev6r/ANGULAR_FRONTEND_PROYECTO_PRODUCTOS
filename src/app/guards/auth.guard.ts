import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

//Guard para evitar ingresar a las secciones de registro - login ya estando "iniciado"
export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const cookie = inject(CookieService);

  if (cookie.check('UserSession')) {

    if (cookie.get('UserSession') === "0") {
      router.navigate(['/login']);
      return false;
    }

  }
  else {
    router.navigate(['/login']);
    return false;
  }

  return true


  //problema: que se cree un objeto con el mismo nombre
};
