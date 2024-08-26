import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductObj } from '../../../Models/Product_Reading.component';

@Component({
  selector: 'app-show-previewed-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-previewed-product.component.html',
  styleUrls: [
    './Styles/ProductUp.component.css',
    './Styles/ProductBotton.component.css',
  ],
})
export class ShowPreviewedProductComponent {
  @Input() prev: ProductObj | undefined;

}
