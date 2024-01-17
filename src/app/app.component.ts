import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MostrarProductosComponent } from "./components/mostrar-productos/mostrar-productos.component";
import { DescripcionProductoComponent } from "./components/descripcion-producto/descripcion-producto.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './general.component.css'],
    imports: [CommonModule, RouterOutlet, MostrarProductosComponent, DescripcionProductoComponent,FormsModule, ReactiveFormsModule]
})
export class AppComponent {
  title = 'Application_Proyecto_1';


  mostrar: boolean = false;

  DesplegarMenu(){
    this.mostrar = !this.mostrar;
  }
}
