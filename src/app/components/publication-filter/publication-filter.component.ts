import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FilterProducts {
  productFilter: string;
  categoryFilter: string;
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

  PressCategory: boolean = false;

  ButtonMinPrice: any = {
    background: '',
    isPressed: false,
  };
  ButtonMaxPrice: any = {
    background: '',
    isPressed: false,
  };

  filter: FilterProducts = {
    productFilter: 'All',
    categoryFilter: 'All',
  };

  constructor() { }
  ngOnInit(): void {
    this.FilterEmiter_Product.emit(this.filter);
  }

  clickMinPrice() {
    if (this.ButtonMinPrice.isPressed) {
      this.ButtonMinPrice.background = '';
      this.ButtonMaxPrice.background = '';
      this.filter.productFilter = 'All';

      this.ButtonMinPrice.isPressed = false;
    } else {
      this.ButtonMinPrice.background = '#379C4E';
      this.ButtonMaxPrice.background = '';
      this.filter.productFilter = 'MinPrice';

      this.ButtonMinPrice.isPressed = true;
      this.ButtonMaxPrice.isPressed = false;
    }

    this.FilterEmiter_Product.emit(this.filter);
  }

  clickMaxPrice() {
    if (this.ButtonMaxPrice.isPressed) {
      this.ButtonMinPrice.background = '';
      this.ButtonMaxPrice.background = '';
      this.filter.productFilter = 'All';

      this.ButtonMaxPrice.isPressed = false;
    } else {
      this.ButtonMinPrice.background = '';
      this.ButtonMaxPrice.background = '#379C4E';
      this.filter.productFilter = 'MaxPrice';

      this.ButtonMaxPrice.isPressed = true;
      this.ButtonMinPrice.isPressed = false;
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

  //predeterminadamente estara activo relevant, si se hace click en otro, se desactivan todos y se activa el clickeado
}
