import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { Product_Reading } from '../../../Models/Product_Reading.component';
import { ProductsReqService } from '../../../Services/ReqRepository/productsReq.service';

@Component({
  selector: 'app-mostrar-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Show-Product.component.html',
  styleUrls: [
    'Styles/PublicacionUp.component.css',
    'Styles/PublicacionBotton.component.css',
  ],
})
export class ShowProductComponent implements OnInit {
  @Output() PublicationIndex: EventEmitter<number> = new EventEmitter<number>();

  @Input() Products: Product_Reading | undefined;
  @Input() index: number | undefined;

  constructor(
    private productsService: ProductsReqService,
    private router: Router
  ) { }

  canDelete: boolean = false;

  ngOnInit(): void {
    if (this.router.url === '/edit') {
      this.canDelete = true;
    } else {
      this.canDelete = false;
    }
    this.PublicationIndex.emit(0);
  }


  obtener() {
    this.PublicationIndex.emit(this.index);
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
}
