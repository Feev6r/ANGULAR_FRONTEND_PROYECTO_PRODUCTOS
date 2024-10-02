
import { LogInComponent } from '../components/Auth/LogIn/LogIn.component';
import { SignUpComponent } from '../components/Auth/SignUp/SignUp.component';

import { ProductComponent } from '../components/Show-Products-Edit-Products/Product/Product.component';
import { NotFoundComponent } from '../components/Stuff/not-found/not-found.component';
import { authGuard } from '../guards/auth.guard';
import { CreateComponent } from '../components/Creating-Products/create/create.component';
import { isAlreadyLoginGuard } from '../guards/is-already-login.guard';
import { EditComponent } from '../components/Editing-Products/edit/edit.component';
import { canDeactivateGuard } from '../guards/can-deactivate.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'signup', canActivate: [isAlreadyLoginGuard], component: SignUpComponent },
  { path: 'login', canActivate: [isAlreadyLoginGuard], component: LogInComponent },
  { path: 'edit', canActivate: [authGuard], canDeactivate: [canDeactivateGuard], component: EditComponent },
  { path: 'create', canActivate: [authGuard], component: CreateComponent },
  { path: '**', component: NotFoundComponent },
];
