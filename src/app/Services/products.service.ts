import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ProductsReqService } from './ReqRepository/productsReq.service';
import { Product_Reading } from '../Models/Product_Reading.component';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { FilterProducts } from '../components/Show-Products-Edit-Products/publication-filter/publication-filter.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _producstService: ProductsReqService,
    private router: Router
  ) { }

  async GetProducts(filter: FilterProducts) {

    let Products: Product_Reading[] = [];
    let ActualProduct: Product_Reading = {};


    let params = new HttpParams()
      .set('CuantityFilter', filter.productFilter)
      .set('CategoryFilter', filter.categoryFilter);



    switch (this.router.url) {


      case '/':
        let Res1 = await lastValueFrom(  //lastValueFrom es una promesa que se resuelve cuando se llega al ultimo elemento
          this._producstService.ProductInfo(params)
        );

        Products = Res1.body!;
        ActualProduct = Products[0];
        break;



      case '/edit':
        let Res2 = await lastValueFrom(
          this._producstService.UserProductsInfo(params)
        );

        Products = Res2.body!;
        ActualProduct = Products[0];

        break;
    }


    return {
      Products: Products,
      ActualProduct: ActualProduct,
    };

  }
}
