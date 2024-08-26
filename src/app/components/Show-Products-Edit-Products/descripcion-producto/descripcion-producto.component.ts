import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment.development';
import { Product_Reading } from '../../../Models/Product_Reading.component';
import { LoadingCircleComponent } from '../../Stuff/loading-circle/loading-circle.component';

@Component({
  selector: 'app-descripcion-producto',
  standalone: true,
  templateUrl: './descripcion-producto.component.html',
  styleUrls: [
    'Styles/secciones-general.component.css',
    'Styles/secciones-independientes.component.css',
  ],
  imports: [CommonModule, LoadingCircleComponent],
})
export class DescripcionProductoComponent implements OnInit, OnChanges {
  @Input() Product: Product_Reading | undefined;

  imgStyle: any = {
    display: 'inline',
  };

  //Path: string = this.Product?.imageRute
  //`${environment.apiUrlBase}Products/Images/`;
  Prev?: number = 0;

  ImageComplete: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['Product']) {
      this.ImageComplete = false;
      this.imgStyle.display = 'none';
    }

    //If the products is the same we need to display the image anyways because the method caused by (load) does't work when the image had already been shown
    if (this.Prev !== this.Product?.idProduct) {
      this.Prev = this.Product?.idProduct;
    } else {
      this.ImageComplete = true;
      this.imgStyle.display = 'inline';
    }

  }

  ngOnInit(): void {
    this.Prev = this.Product?.idProduct;

  }
  IsAlreadyLoaded() {
    this.ImageComplete = true;
    this.imgStyle.display = 'inline';
  }
}
