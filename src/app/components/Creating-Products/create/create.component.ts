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
  obj: undefined;

  a(a: ProductObj) {

  }

}
