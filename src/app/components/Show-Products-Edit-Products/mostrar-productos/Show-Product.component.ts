import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Order, Product_Reading, ProductObj } from '../../../Models/Product_Reading.component';
import { ProductsReqService } from '../../../Services/ReqRepository/productsReq.service';
import { OrdersReqService } from '../../../Services/ReqRepository/orders-req.service';


@Component({
  selector: 'app-mostrar-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Show-Product.component.html',
  styleUrls: [
    'Styles/PublicacionUp.component.css',
    'Styles/PublicacionBotton.component.css',
    '../../../shared/category_colors.component.css'
  ],
})
export class ShowProductComponent implements OnInit, OnChanges {
  @Output() PublicationIndex: EventEmitter<number> = new EventEmitter<number>();
  @Output() ActualProductToEdit: EventEmitter<ProductObj> = new EventEmitter<ProductObj>();

  @Input() Products: Product_Reading | undefined;
  @Input() index: number | undefined;

  canDelete: boolean = false;
  canBuy: boolean = true;
  isOrderUrl: boolean = false;

  constructor(
    private router: Router,
    private _productService: ProductsReqService,
    private _ordersServiceReq: OrdersReqService
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['index']) {

    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('userName') && localStorage.getItem('userName') == this.Products?.author) {
      this.canBuy = false;
    }

    this.isOrderUrl = this.router.url === '/orders'
    this.canDelete = this.router.url === '/edit';
  }


  obtener() {
    //emit the actual index to description component
    this.PublicationIndex.emit(this.index);


    //edit stuff
    if (this.router.url === '/edit') {

      let productToEdit: ProductObj = {
        title: this.Products?.title!,
        description: this.Products?.description!,
        stock: this.Products?.stock!,
        price: this.Products?.price!,
        category: this.Products?.idCategory!,
        file: this.Products?.imageRoute!,
        productId: this.Products?.idProduct,
      }
      this.ActualProductToEdit.emit(productToEdit);
    }

  }

  delete() {
    this._productService.Delete(this.Products?.idProduct!).subscribe(x => {
      location.reload();
    })
  }

  deleteOrder() {
    this._ordersServiceReq.DeleteOrders(this.Products?.idOrder).subscribe(x => {
      location.reload();
    })
  }

  MakeOrder() {
    this._ordersServiceReq.CreateOrder(new Order(1, this.Products?.idProduct!)).subscribe(x => {
      location.reload();
    })
  }

  categorySelector(category: number): object | any {
    // console.log(category)
    switch (category) {
      case 3:
        return { class: "material-symbols-outlined vegetable", type: "icecream" }
      case 4:
        return { class: "material-symbols-outlined fruits", type: "nutrition" }
      case 5:
        return { class: "material-symbols-outlined meat", type: "egg_alt" }
      case 6:
        return { class: "material-symbols-outlined drinks", type: "local_bar" }
      default:
        return { class: "material-symbols-outlined fruits", type: "nutrition" }
    }
  }
}
