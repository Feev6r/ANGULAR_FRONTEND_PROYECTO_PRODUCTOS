import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from '../Interceptors/error-handler.interceptor';
import { headerManipulatorInterceptor } from '../Interceptors/header-manipulator.interceptor';
import { provideToastr } from 'ngx-toastr';
import { provideRouter } from '@angular/router';
// import { provideAnimations } from '@angular/platform-browser/animations';



export const appConfig: ApplicationConfig = {
  providers: [


    // provideAnimations(),

    provideToastr({ timeOut: 900, preventDuplicates: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([headerManipulatorInterceptor, errorHandlerInterceptor]),
      withFetch()
    ),



  ]
};



