import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductObj } from '../../../Models/Product_Reading.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsReqService } from '../../../Services/ReqRepository/productsReq.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ToastrModule],
  templateUrl: './edit-product.component.html',
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
export class EditProductComponent implements OnChanges {

  @Input() productToEdit: ProductObj = new ProductObj();

  imageUrl: string | ArrayBuffer | null = null;
  FormData: FormData = new FormData();


  product: ProductObj = new ProductObj();
  myForm: FormGroup;


  titleClass = "title-creation-input";
  descriptionClass = "description-input";

  initialPath: string = "https://res.cloudinary.com/dpgknohvo/"

  constructor(private _productService: ProductsReqService, private router: Router, private toas: ToastrService) {

    this.myForm = new FormGroup({
      title: new FormControl(this.productToEdit.title, [Validators.required, Validators.maxLength(36)]),
      description: new FormControl(this.productToEdit.description, [Validators.required, Validators.maxLength(1000)]),
      stock: new FormControl(this.productToEdit.stock),
      price: new FormControl(this.productToEdit.price),
    });

    this.myForm.setValue({
      title: this.productToEdit.title,
      description: this.productToEdit.description,
      stock: this.productToEdit.stock,
      price: this.productToEdit.price,
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


  ngOnChanges(changes: SimpleChanges): void {

    if (changes['productToEdit']) {
      this.myForm.setValue({
        title: this.productToEdit.title,
        description: this.productToEdit.description,
        stock: this.productToEdit.stock,
        price: this.productToEdit.price,
        // image: this.productToEdit.file

      });
      // this.hasUnsavedChangesFlag = true;
    }
  }


  onSubmit() {
    this.hasUnsavedChangesFlag = false;

    this.FormData.append('title', this.myForm.value.title);
    this.FormData.append('description', this.myForm.value.description);
    this.FormData.append('idCategory', String(this.productToEdit.category));
    this.FormData.append('stock', String(this.myForm.value.stock));
    this.FormData.append('price', String(this.myForm.value.price));

    if (this.productToEdit.productId) {
      this._productService.Edit(this.FormData, this.productToEdit.productId).subscribe(x => {
        location.reload();
      })
    }

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

    if (this.productToEdit.stock > 0) {
      this.productToEdit.stock--;
      this.myForm.patchValue({ stock: this.productToEdit.stock })
      this.hasUnsavedChangesFlag = true;

    }

  }

  add() {
    if (this.productToEdit.stock < 10000) {
      this.productToEdit.stock++;
      this.myForm.patchValue({ stock: this.productToEdit.stock })
      this.hasUnsavedChangesFlag = true;

    }

  }

  onStockChange(event: any) {

    if (event.target.value < 0) this.product.stock = 0;
    else if (event.target.value > 10000) this.product.stock = 0;
    else this.product.stock = event.target.value;

    this.hasUnsavedChangesFlag = true;

  }

  onTitleChange(event: any) {

    if (this.myForm.get('title')?.errors?.['maxlength']) this.titleClass = "title-creation-input wrong";
    else this.titleClass = "title-creation-input"


    this.product.title = event.target.value;
    this.hasUnsavedChangesFlag = true;
  }

  onDescriptionChange(event: any) {

    if (this.myForm.get('description')?.errors?.['maxlength']) this.descriptionClass = "description-input wrong";
    else this.descriptionClass = "description-input"

    this.product.description = event.target.value;

    this.hasUnsavedChangesFlag = true;
  }

  onPriceChange(event: any) {

    this.product.price = event.target.value;
    this.hasUnsavedChangesFlag = true;

  }

  onSomethingChange() {
    //hacer swich. creo que una refactorizacion
  }

  category(categoryNumber: number) {
    this.productToEdit.category = categoryNumber;
    this.hasUnsavedChangesFlag = true;

  }


  delete() {
    this.hasUnsavedChangesFlag = false;

    this._productService.Delete(this.productToEdit.productId!).subscribe(x => {
      location.reload();
    })


  }


}



