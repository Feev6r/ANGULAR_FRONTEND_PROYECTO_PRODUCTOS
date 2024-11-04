import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Order } from '../../Models/Product_Reading.component';

@Injectable({
  providedIn: 'root'
})
export class OrdersReqService {

  constructor(private http: HttpClient) { }

  CreateOrder(order: Order) {
    return this.http.post<any>(`${environment.apiUrlBase}Products/orders/make`, order, { withCredentials: true })
  }
  GetTotalOrders() {
    return this.http.get<any>(`${environment.apiUrlBase}Products/orders/total`, { withCredentials: true })
  }
  GetTotalOrdersPrice() {
    return this.http.get<any>(`${environment.apiUrlBase}Products/orders/totalPrice`, { withCredentials: true })
  }
  DeleteOrders(idOrder: number = 0) {
    return this.http.delete<any>(`${environment.apiUrlBase}Products/orders/delete${idOrder}`, { withCredentials: true })
  }
}
