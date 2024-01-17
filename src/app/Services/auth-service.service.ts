import { Injectable } from '@angular/core';
import { GetInformationService } from './getInformation.service';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../Models/userModel.component';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private servicio: GetInformationService, private cookieService: CookieService, private http: HttpClient) {}



  signUpService(user: User){
    return this.http.post<User>(`${environment.apiUrlBase}Auth/signUp`, user, {responseType: 'text' as 'json', observe: 'response', withCredentials: true});
  }

  logginService(user: User): Observable<any>{

    return this.http.post<User>(`${environment.apiUrlBase}Auth/login`, user, {observe: 'response', responseType: 'text' as 'json', withCredentials: true})
  } 

  loggoutService(){
    return this.http.post<any>(`${environment.apiUrlBase}Auth/logout`, {Name: "nada"}, {responseType: 'text' as 'json', withCredentials: true})
  }
  
  
}
