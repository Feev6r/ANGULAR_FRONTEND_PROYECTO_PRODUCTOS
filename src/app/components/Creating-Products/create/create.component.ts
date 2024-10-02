import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPreviewedProductComponent } from '../show-previewed-product/show-previewed-product.component';
import { CreateProductComponent } from '../create-product/create-product.component';
import { ProductObj } from '../../../Models/Product_Reading.component';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  imports: [
    CommonModule,
    ShowPreviewedProductComponent,
    CreateProductComponent,
  ],
})
export class CreateComponent {
  obj: ProductObj = {
    title: "Title",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisc
          quibusdam id similique consequatur error accusantium soluta magni
          saepe quia tenetur esse in corporis, sint quae delectus. Reiciendis
          impedit non eaque.`,
    price: 0,
    stock: 0,
    category: 0,
    file: null,
    productId: 0,
  };

  setProperties(product: ProductObj) {

    this.obj.title = product.title ? product.title : 'Title';
    this.obj.description = product.description ? product.description : "(Description Here)";
    this.obj.price = product.price ? product.price : 0;
    this.obj.stock = product.stock ? product.stock : 0;
    this.obj.category = product.category ? product.category : 0;
  }

}
