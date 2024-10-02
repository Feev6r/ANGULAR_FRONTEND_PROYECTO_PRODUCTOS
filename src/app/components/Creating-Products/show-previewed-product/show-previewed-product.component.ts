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
    '../../../shared/category_colors.component.css'
  ],
})
export class ShowPreviewedProductComponent {

  @Input() prev: ProductObj | undefined;

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
