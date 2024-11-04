import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Order, Product_Reading, ProductObj } from '../../Models/Product_Reading.component';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductsReqService {

  constructor(private http: HttpClient) { }

  ProductInfo(parameter: any) {  //each parameter must be written same as the backend variable
    return this.http.get<Product_Reading[]>(`${environment.apiUrlBase}Products/show`, { withCredentials: true, params: parameter, observe: 'response' });
  }

  UserProductsInfo(parameters: any) {
    return this.http.get<Product_Reading[]>(`${environment.apiUrlBase}Products/user`, { withCredentials: true, params: parameters, observe: 'response' });
  }

  CreateProducts(product: FormData) {
    return this.http.post<any>(`${environment.apiUrlBase}Products/create`, product, { withCredentials: true })
  }

  Edit(product: FormData, productId: number) {
    return this.http.put<any>(`${environment.apiUrlBase}Products/edit${productId}`, product, { withCredentials: true })
  }

  Delete(productId: number) {
    return this.http.delete<any>(`${environment.apiUrlBase}Products/delete${productId}`, { withCredentials: true })
  }


  //#region debuggin requests
  Image(idProduct: number) {
    return this.http.get<any>(`${environment.apiUrlBase}Products/images/${idProduct}`, { responseType: 'blob' as 'json' })
  }
  testService(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrlBase}Products/test`, { withCredentials: true, observe: 'response' });
  }
  //#endregion

}

