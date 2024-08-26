import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User_Reading } from '../../Models/User_ReadingModel.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  getUserInformation(): Observable<User_Reading>{
    return this.http.get<User_Reading>(`${environment.apiUrlBase}Information/user`, {withCredentials: true})
  }

}
