import { Routes } from '@angular/router';
import { MostrarProductosComponent } from './components/mostrar-productos/mostrar-productos.component';
import { DescripcionProductoComponent } from './components/descripcion-producto/descripcion-producto.component';
import { RegistroSignUpComponent } from './components/registro-sign-up/registro-sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PublicacionesComponent } from './Pages/publicaciones/publicaciones.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path: "", component: PublicacionesComponent},
    {path: "signup", component: RegistroSignUpComponent},
    {path: "login", component: LogInComponent},
    {path: "**", component: NotFoundComponent }
];
