import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingCircleComponent } from "../loading-circle/loading-circle.component";

@Component({
    selector: 'app-descripcion-producto',
    standalone: true,
    templateUrl: './descripcion-producto.component.html',
    styleUrls: ['Styles/secciones-general.component.css', 'Styles/secciones-independientes.component.css'],
    imports: [CommonModule, LoadingCircleComponent]
})
export class DescripcionProductoComponent {

}
