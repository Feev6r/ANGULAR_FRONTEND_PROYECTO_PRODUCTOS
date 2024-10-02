import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../Services/products.service';
import { ProductsReqService } from '../../../Services/ReqRepository/productsReq.service';
import { HttpParams } from '@angular/common/http';
import { Product_Reading } from '../../../Models/Product_Reading.component';
import { User_Writing } from '../../../Models/User_WritingModel.component';
import { AuthServiceService } from '../../../Services/ReqRepository/authReq.service';
import { LoadingCircleComponent } from '../../Stuff/loading-circle/loading-circle.component';
import { DescripcionProductoComponent } from '../descripcion-producto/descripcion-producto.component';
import { ShowProductComponent } from '../mostrar-productos/Show-Product.component';
import {
  PublicationFilterComponent,
  FilterProducts,
} from '../../publication-filter/publication-filter.component';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  templateUrl: './Product.component.html',
  styleUrl: './Product.component.css',
  imports: [
    CommonModule,
    ShowProductComponent,
    DescripcionProductoComponent,
    PublicationFilterComponent,
    LoadingCircleComponent,
  ],
})
export class ProductComponent implements OnInit {
  //#region  debugVariables
  public userPredt: User_Writing = {
    Name: 'FernandoTOKEN',
    Password: 'Policia44',
  };

  debugMode: boolean = true;

  nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //#endregion

  Products: Product_Reading[] = [];
  ActualProduct: Product_Reading = {};

  constructor(
    private _producstService: ProductsService,
    private _producstReqService: ProductsReqService,
    private _authService: AuthServiceService
  ) { }

  ngOnInit(): void { }

  async GetInfoProducts(filter: FilterProducts) {
    let info = await this._producstService.GetProducts(filter);

    this.Products = info.Products;
    this.ActualProduct = info.ActualProduct ?? {};
  }

  setDescription(index: number) {
    this.ActualProduct = this.Products[index];
  }

  //#region debugMethods
  login() {
    this._authService.LogginService(this.userPredt).subscribe((token) => {
      // this._authService.TokenCsrf().subscribe(x => {
      //   location.reload();
      // })
      location.reload();
    });



  }

  test() {
    this._producstReqService.testService().subscribe((data) => {
      console.log(data);
    });
  }

  getProducts() {
    let params = new HttpParams().set('productFilter', 'All');

    let productFilter = {
      CuantityFilter: 'All',
      CategoryFilter: 'All',
    };

    // this._producstReqService.ProductInfo(productFilter).subscribe(data =>{
    //   //console.log(data[1].imageRute);
    //   console.log(data)
    //   //this.Products = data;
    // })
  }

  obtenerImageUrl() {
    this._producstReqService.Image(1).subscribe((data) => {
      //console.log(data.headers)
      //console.log(data);
      //this.imagenUrl = URL.createObjectURL(data);
    });
  }
  //#endregion
}
