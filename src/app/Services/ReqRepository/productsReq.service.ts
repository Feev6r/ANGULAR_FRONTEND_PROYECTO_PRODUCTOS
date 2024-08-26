import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable} from 'rxjs';
import { Product_Reading } from '../../Models/Product_Reading.component';



@Injectable({
  providedIn: 'root'
})
export class ProductsReqService {

  constructor(private http: HttpClient) { } 

  ProductInfo(parameter: any){  //each parameter must be written same as the backend variable
    return this.http.get<Product_Reading[]>(`${environment.apiUrlBase}Products/show`, {withCredentials: true, params: parameter, observe: 'response'});
  }

  UserProductsInfo(parameters: any){
    return this.http.get<Product_Reading[]>(`${environment.apiUrlBase}Products/user`, {withCredentials: true,params: parameters, observe: 'response'});
  }

  DeleteProduct(parameters: any){
    return this.http.delete<any>(`${environment.apiUrlBase}Products/delete`, {withCredentials : true, params: parameters})
  }

//#region solicitud de testeo 
  Image(idProduct: number){
    return this.http.get<any>(`${environment.apiUrlBase}Products/images/${idProduct}`, {responseType: 'blob' as 'json'})
  }
  testService(): Observable<any>{
    return this.http.post<any>(`${environment.apiUrlBase}Products/test`, {}, { withCredentials: true, observe: 'response'});
  }
//#endregion

}

