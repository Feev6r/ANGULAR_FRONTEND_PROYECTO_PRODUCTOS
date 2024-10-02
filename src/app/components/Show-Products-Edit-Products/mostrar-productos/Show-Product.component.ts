import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { Product_Reading, ProductObj } from '../../../Models/Product_Reading.component';


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

  constructor(private router: Router) {

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['index']) {

    }
  }

  canDelete: boolean = false;
  canBuy: boolean = true;


  ngOnInit(): void {



    if (localStorage.getItem('userName') && localStorage.getItem('userName') == this.Products?.author) {
      this.canBuy = false;
    }
    if (this.router.url === '/edit') this.canDelete = true;
    else this.canDelete = false;


    // this.PublicationIndex.emit(0);


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
        file: this.Products?.imageRute!,
        productId: this.Products?.idProduct,
      }

      this.ActualProductToEdit.emit(productToEdit);
    }

  }

  delete() {
    // let deleteFilter = {
    //   IdProduct: this.Products?.idProduct,
    //   Uri: this.Products?.imageRute
    // }
    // this.productsService.deleteProduct(deleteFilter).subscribe({
    //   next: (data) =>{
    //     console.log(data)
    //   },
    //   complete: () =>{
    //   }
    // })
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
