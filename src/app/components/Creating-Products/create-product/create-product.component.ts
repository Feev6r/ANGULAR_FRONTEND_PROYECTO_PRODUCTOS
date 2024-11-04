import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlobContentModel, ProductObj } from '../../../Models/Product_Reading.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsReqService } from '../../../Services/ReqRepository/productsReq.service';



@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [[CommonModule], [FormsModule], [ReactiveFormsModule]],
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
    '../../../shared/category_colors.component.css'
  ],
})



export class CreateProductComponent {


  @Output() previewObj = new EventEmitter<ProductObj>();

  imageUrl: string | ArrayBuffer | null = null;
  FormData: FormData = new FormData();


  product: ProductObj = new ProductObj();
  myForm: FormGroup;


  titleClass = "title-creation-input";
  descriptionClass = "description-input";

  constructor(private _productService: ProductsReqService) {

    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(36)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      stock: new FormControl(''),
      price: new FormControl(''),
      image: new FormControl([], [Validators.required, Validators.nullValidator])

    });
  }



  hasUnsavedChangesFlag: boolean = false;  // Simulate unsaved changes


  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.hasUnsavedChanges()) {
      $event.returnValue = true;  // Show browser confirmation dialog
    }
  }

  hasUnsavedChanges(): boolean {
    return this.hasUnsavedChangesFlag;
  }


  onSubmit() {
    this.myForm.value.stock = this.product.stock;
    this.myForm.value.category = this.product.category;
    this.hasUnsavedChangesFlag = false;

    this.FormData.append('title', this.myForm.value.title);
    this.FormData.append('description', this.myForm.value.description);
    this.FormData.append('idCategory', String(this.myForm.value.category));
    this.FormData.append('stock', String(this.myForm.value.stock));
    this.FormData.append('price', String(this.myForm.value.price));

    this._productService.CreateProducts(this.FormData).subscribe(x => {
      location.reload();
    })


  }

  onFileSelected(event: any) {


    const file: File = event.target.files[0];
    if (file) {

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      this.hasUnsavedChangesFlag = true;

      this.convertFileToBlob(file);

    }
  }

  convertFileToBlob(file: File): void {

    const reader = new FileReader();
    let imageBlob: Blob;

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && e.target.result) {

        imageBlob = new Blob([e.target.result], { type: file.type });

        this.FormData.append('file', imageBlob, file.name);


      }
    };
    reader.readAsArrayBuffer(file); // Convierte el archivo a un ArrayBuffer
  }

  substrack() {

    if (this.product.stock > 0) {
      this.product.stock--;
      this.previewObj.emit(this.product);
      this.hasUnsavedChangesFlag = true;

    }
  }

  add() {
    if (this.product.stock < 10000) {
      this.product.stock++;
      this.previewObj.emit(this.product);
      this.hasUnsavedChangesFlag = true;

    }
  }

  onStockChange(event: any) {

    if (event.target.value < 0) this.product.stock = 0;
    else if (event.target.value > 10000) this.product.stock = 0;
    else {
      this.product.stock = event.target.value;
      this.hasUnsavedChangesFlag = true;
    }

    if (this.product.stock != 0) this.previewObj.emit(this.product);
  }

  onTitleChange(event: any) {

    if (this.myForm.get('title')?.errors?.['maxlength']) this.titleClass = "title-creation-input wrong";
    else this.titleClass = "title-creation-input"


    this.product.title = event.target.value;
    this.hasUnsavedChangesFlag = true;

    this.previewObj.emit(this.product);
  }

  onDescriptionChange(event: any) {

    if (this.myForm.get('description')?.errors?.['maxlength']) this.descriptionClass = "description-input wrong";
    else this.descriptionClass = "description-input"


    this.product.description = event.target.value;
    this.previewObj.emit(this.product);
    this.hasUnsavedChangesFlag = true;

  }

  onPriceChange(event: any) {

    this.product.price = event.target.value;

    this.previewObj.emit(this.product);
    this.hasUnsavedChangesFlag = true;

  }

  onSomethingChange() {
    //hacer swich. creo que una refactorizacion
  }

  category(categoryNumber: number) {

    this.product.category = categoryNumber;
    this.previewObj.emit(this.product);

    this.hasUnsavedChangesFlag = true;

  }


  reset() {
    this.product = new ProductObj();
    this.FormData = new FormData();
    this.imageUrl = null;
    this.previewObj.emit(this.product);
  }

}


// console.log(`Title: ${this.myForm.value.title}`);
// console.log(`Description: ${this.myForm.value.description}`);
// console.log(`Stock: ${this.myForm.value.stock}`);
// console.log(`Price: ${this.myForm.value.price}`);
// console.log(`Category: ${this.myForm.value.category}`);