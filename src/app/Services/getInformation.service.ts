import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetInformationService {

  constructor(private http: HttpClient) { }

  getProductsService(header: HttpHeaders): Observable<any>{
    return this.http.get<any>(`${environment.apiUrlBase}Show/Productos`, {withCredentials: true, headers: header})
  }

  testService(header: HttpHeaders): Observable<any>{
    return this.http.post<any>(`${environment.apiUrlBase}Show/test`, {a: "a"}, { responseType: 'text' as 'json', withCredentials: true, headers: header});
  }

  metodo(){
    console.log('se ejecuto metodo')
  }
  // getProductsService(): Observable<any>{
  //   return this.http.get<any>('https://localhost:7777/Productos', {withCredentials: true, responseType: 'text' as 'json'})
  // }
}
