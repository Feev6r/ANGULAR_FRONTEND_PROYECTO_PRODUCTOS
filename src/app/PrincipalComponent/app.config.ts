import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from '../Interceptors/error-handler.interceptor';
import { headerManipulatorInterceptor } from '../Interceptors/header-manipulator.interceptor';
import { provideToastr } from 'ngx-toastr';


export const appConfig: ApplicationConfig = {
  providers: [


    provideToastr({ timeOut: 900, preventDuplicates: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([headerManipulatorInterceptor, errorHandlerInterceptor]),
      withFetch()
    ),



  ]
};



