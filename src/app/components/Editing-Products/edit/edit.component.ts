import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../Services/products.service';
import { ShowProductComponent } from '../../Show-Products-Edit-Products/mostrar-productos/Show-Product.component';
import { Product_Reading, ProductObj } from '../../../Models/Product_Reading.component';
import { FilterProducts, PublicationFilterComponent } from '../../publication-filter/publication-filter.component';
import { EditProductComponent } from "../edit-product/edit-product.component";



@Component({
  selector: 'app-edit',
  standalone: true,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
  imports: [CommonModule, PublicationFilterComponent, ShowProductComponent, EditProductComponent],
})
export class EditComponent {
  productToEdit: ProductObj = new ProductObj();

  Products: Product_Reading[] = [];
  ActualProduct: Product_Reading = {};



  constructor(private _producstService: ProductsService) { }

  async GetInfoProducts(filter: FilterProducts) {
    let info = await this._producstService.GetProducts(filter);

    this.Products = info.Products;
    this.ActualProduct = info.ActualProduct;
  }

  getProductToEdit(product: ProductObj) {
    this.productToEdit = product;
  }


}
