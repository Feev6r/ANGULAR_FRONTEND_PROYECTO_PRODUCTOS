import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrdersReqService } from '../../Services/ReqRepository/orders-req.service';

export interface FilterProducts {
  productFilter: string;
  categoryFilter: string;
  isOrder: string;
}

@Component({
  selector: 'app-publication-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publication-filter.component.html',
  styleUrls: ['./publication-filter.component.css',
    '../../shared/category_colors.component.css'],
})
export class PublicationFilterComponent implements OnInit {
  @Output() FilterEmiter_Product: EventEmitter<FilterProducts> = new EventEmitter<FilterProducts>();
  @Output() Change: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private router: Router,
    private _ordersServiceReq: OrdersReqService

  ) {
  }

  PressCategory: boolean = false;
  state: number = 0;
  isOrderRute: boolean = false;
  totalPrice: number = 0;
  filter: FilterProducts = {
    productFilter: 'All',
    categoryFilter: 'All',
    isOrder: (this.router.url === '/orders').toString()
  };

  ngOnInit(): void {
    this.FilterEmiter_Product.emit(this.filter);
    this.isOrderRute = this.router.url === '/orders'
    if (this.isOrderRute) this.getTotalPrice();
  }

  clickMinPrice() {
    if (this.state === 1) {
      this.filter.productFilter = 'All';
      this.state = 0;
    }
    else {
      this.filter.productFilter = 'MinPrice';
      this.state = 1;
    }
    this.FilterEmiter_Product.emit(this.filter);
  }

  clickMaxPrice() {
    if (this.state === 2) {
      this.filter.productFilter = 'All';
      this.state = 0;
    }
    else {
      this.filter.productFilter = 'MaxPrice';
      this.state = 2;
    }

    this.FilterEmiter_Product.emit(this.filter);
  }

  setCategory(idCategory: number) {
    switch (idCategory) {
      //ALL
      case 0:
        this.filter.categoryFilter = 'All';
        this.FilterEmiter_Product.emit(this.filter);
        this.Change.emit(0);
        break;

      //Vegetables
      case 1:
        this.filter.categoryFilter = 'Vegetables';
        this.FilterEmiter_Product.emit(this.filter);
        this.Change.emit(0);
        break;

      //Fruits
      case 2:
        this.filter.categoryFilter = 'Fruits';
        this.FilterEmiter_Product.emit(this.filter);
        this.Change.emit(0);
        break;

      //Meat
      case 3:
        this.filter.categoryFilter = 'Meats';
        this.FilterEmiter_Product.emit(this.filter);
        this.Change.emit(0);
        break;

      case 4:
        this.filter.categoryFilter = 'Drinks';
        this.FilterEmiter_Product.emit(this.filter);
        this.Change.emit(0);
        break;

      //ALL or WrongInput
      default:
        this.filter.categoryFilter = 'All';
        this.FilterEmiter_Product.emit(this.filter);
        this.Change.emit(0);
    }
  }

  getTotalPrice() {
    this._ordersServiceReq.GetTotalOrdersPrice().subscribe(x => {
      this.totalPrice = x;
    })
  }

  deleteAllOrders() {
    this._ordersServiceReq.DeleteOrders().subscribe(x => {
      console.log(x);
      location.reload();
    })
  }
  //predeterminadamente estara activo relevant, si se hace click en otro, se desactivan todos y se activa el clickeado
}
