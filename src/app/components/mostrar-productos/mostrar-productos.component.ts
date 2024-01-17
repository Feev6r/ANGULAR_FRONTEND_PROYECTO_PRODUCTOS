import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetInformationService } from '../../Services/getInformation.service';

@Component({
  selector: 'app-mostrar-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['Styles/PublicacionUp.component.css', 'Styles/PublicacionBotton.component.css']
  
  
})
export class MostrarProductosComponent {

  constructor(private service: GetInformationService){}

  obtener(){
    // this.service.getProductsService().subscribe((response) =>{
    //   console.log(response)
    // })
  }
}