import { Routes } from '@angular/router';
import { LogInComponent } from '../components/Auth/LogIn/LogIn.component';
import { SignUpComponent } from '../components/Auth/SignUp/SignUp.component';
import { EditComponent } from '../components/Show-Products-Edit-Products/edit/edit.component';
import { ProductComponent } from '../components/Show-Products-Edit-Products/Product/Product.component';
import { NotFoundComponent } from '../components/Stuff/not-found/not-found.component';
import { authGuard } from '../guards/auth.guard';
import { CreateComponent } from '../components/Creating-Products/create/create.component';

export const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'signup', canActivate: [authGuard], component: SignUpComponent },
  { path: 'login', canActivate: [authGuard], component: LogInComponent },
  { path: 'edit', component: EditComponent },
  { path: 'create', component: CreateComponent },
  { path: '**', component: NotFoundComponent },
];
