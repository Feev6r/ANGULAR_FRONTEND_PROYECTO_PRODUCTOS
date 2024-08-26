import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientXsrfModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from '../Interceptors/error-handler.interceptor';
import { headerManipulatorInterceptor } from '../Interceptors/header-manipulator.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(
      withInterceptors([headerManipulatorInterceptor,errorHandlerInterceptor]),
      withFetch()
      ), 
    HttpClientXsrfModule  
]
};
