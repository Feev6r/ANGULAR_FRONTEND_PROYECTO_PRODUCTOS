import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductObj } from '../../../Models/Product_Reading.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [[CommonModule], [FormsModule]],
  templateUrl: './create-product.component.html',
  styleUrls: [
    './Styles/create-product.component.css',
    './Styles/input-form.component.css',
    './Styles/general-form-component.css',
    './Styles/description-input.component.css',
    './Styles/Title-input.component.css',
    './Styles/category.component.css',
    './Styles/stock.component.css',
    './Styles/price-component.css',
    './Styles/botton-container.component.css',
  ],
})
export class CreateProductComponent {
  @Output() previewObj = new EventEmitter<ProductObj>();


  imageUrl: string | ArrayBuffer | null = null;
  StockNumber: number = 0;

  // a: string = ""

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

  substrack() {
    if (this.StockNumber > 0) {
      this.StockNumber--;
    }
  }

  add() {
    this.StockNumber++;
  }

  onChange(event: any) {
    if (event.target.value < 0) {
      this.StockNumber = 0;
    } else {
      this.StockNumber = event.target.value;
    }
  }
}
