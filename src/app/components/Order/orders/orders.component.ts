import { Component, OnInit } from '@angular/core';
import { FilterProducts, PublicationFilterComponent } from "../../publication-filter/publication-filter.component";
import { Product_Reading } from '../../../Models/Product_Reading.component';
import { ProductsService } from '../../../Services/products.service';
import { ShowProductComponent } from "../../Show-Products-Edit-Products/mostrar-productos/Show-Product.component";
import { OrdersReqService } from '../../../Services/ReqRepository/orders-req.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [PublicationFilterComponent, ShowProductComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  Products: Product_Reading[] = [];
  totalPrice: number = 0;

  constructor(
    private _productsService: ProductsService,
    private _ordersServiceReq: OrdersReqService
  ) { }

  getTotalPrice() {
    this._ordersServiceReq.GetTotalOrdersPrice().subscribe(totalPrice => {
      this.totalPrice = totalPrice;
      console.log(this.totalPrice)

    })
  }


  ngOnInit(): void {
    this.getTotalPrice();

  }


  async GetInfoProducts(filter: FilterProducts) {
    let info = await this._productsService.GetProducts(filter);

    this.Products = info.Products;
    console.log(this.Products[0].orderQuantity);
  }
}
