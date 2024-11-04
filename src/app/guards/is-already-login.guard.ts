import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


export const isAlreadyLoginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const cookie = inject(CookieService);

  if (cookie.check('UserSession')) {

    if (cookie.get('UserSession') === "1") {
      router.navigate(['']);
      return false;
    }

  }

  return true;
};
