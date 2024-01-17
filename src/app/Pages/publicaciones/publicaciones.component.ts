import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarProductosComponent } from "../../components/mostrar-productos/mostrar-productos.component";
import { DescripcionProductoComponent } from "../../components/descripcion-producto/descripcion-producto.component";
import { GetInformationService } from '../../Services/getInformation.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from '../../Services/auth-service.service';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../../Models/userModel.component';

@Component({
    selector: 'app-publicaciones',
    standalone: true,
    templateUrl: './publicaciones.component.html',
    styleUrl: './publicaciones.component.css',
    imports: [CommonModule, MostrarProductosComponent, DescripcionProductoComponent]
})
export class PublicacionesComponent{

  public userPredt: User ={
    Name: 'FernandoTOKEN',
    Password: 'Policia44'
  }

  constructor(private service: GetInformationService, private authService: AuthServiceService, private cookieService: CookieService) {}   

    login(){

      this.authService.logginService(this.userPredt).subscribe((token) =>{
        localStorage.setItem('CSRF_TOKEN', token.body);

      })
    }

  test(){
    const header = new HttpHeaders({

      'Content-Type': 'application/json',
      'X-CSRF-TOKEN':  localStorage.getItem('CSRF_TOKEN') || ''

    }); 
    
    this.service.testService(header).subscribe({

      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete') 

    })   

  }

}
