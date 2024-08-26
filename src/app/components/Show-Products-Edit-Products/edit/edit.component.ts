import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FilterProducts,
  PublicationFilterComponent,
} from '../publication-filter/publication-filter.component';
import { ShowProductComponent } from '../mostrar-productos/Show-Product.component';
import { Product_Reading } from '../../../Models/Product_Reading.component';
import { ProductsService } from '../../../Services/products.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  imports: [CommonModule, PublicationFilterComponent, ShowProductComponent],
})
export class EditComponent {
  Products: Product_Reading[] = [];
  ActualProduct: Product_Reading = {};

  constructor(private _producstService: ProductsService) {}

  async GetInfoProducts(filter: FilterProducts) {
    let info = await this._producstService.GetProducts(filter);

    this.Products = info.Products;
    this.ActualProduct = info.ActualProduct;
  }
}
