import { Injectable } from '@angular/core';
import { ProductsReqService } from './productsReq.service';
import { User_Writing } from '../../Models/User_WritingModel.component';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private servicio: ProductsReqService, private http: HttpClient) { }


  SignUpService(user: User_Writing) {
    return this.http.post<any>(`${environment.apiUrlBase}Auth/signUp`, user, { observe: 'response', withCredentials: true });
  }

  LogginService(user: User_Writing): Observable<any> {
    return this.http.post<User_Writing>(`${environment.apiUrlBase}Auth/login`, user, { observe: 'response', withCredentials: true })
  }

  TokenCsrf() {
    return this.http.get<any>(`${environment.apiUrlBase}Auth/tokenCsrf`, { observe: 'response', withCredentials: true })
  }

  LoggoutService() {
    return this.http.post<any>(`${environment.apiUrlBase}Auth/logout`, {}, { withCredentials: true })
  }

}
