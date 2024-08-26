import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { User_Writing } from '../../../Models/User_WritingModel.component';
import { AuthServiceService } from '../../../Services/ReqRepository/authReq.service';
import { ProductsReqService } from '../../../Services/ReqRepository/productsReq.service';
import { UserService } from '../../../Services/ReqRepository/userReq.service';
import { LoadingCircleComponent } from '../../Stuff/loading-circle/loading-circle.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  templateUrl: './logIn.component.html',
  styleUrls: [
    'Styles/General-form.component.css',
    'Styles/Independent-subForm.component.css',
    'Styles/Input-subForm.component.css',
  ],
  imports: [CommonModule, ReactiveFormsModule, LoadingCircleComponent],
})
export class LogInComponent {
  public mensajeError: string = '';
  public user: User_Writing = {};
  public cargando: boolean = false;
  public pressButton: boolean = false;
  public isLoggin: boolean = false;

  constructor(
    private tempService: ProductsReqService,
    private authService: AuthServiceService,
    private communication: UserService,
    private Cookie: CookieService,
    private router: Router
  ) {}

  loginform = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  Mimetodo() {
    this.isLoggin = true;
    this.pressButton = true;
    this.cargando = true;

    if (!this.loginform.value.name) {
      this.mensajeError = 'Coloque un nombre';
      this.pressButton = false;
      this.cargando = false;

      return;
    } else if (!this.loginform.value.password) {
      this.mensajeError = 'Coloque una contraseña';
      this.pressButton = false;
      this.cargando = false;

      return;
    } else {
      this.mensajeError = '';

      this.user.Name = this.loginform.value.name;
      this.user.Password = this.loginform.value.password;

      this.authService.LogginService(this.user).subscribe({
        next: (token) => {
          //localStorage.setItem('CSRF_TOKEN', token.body);
        },

        error: (error) => {
          this.mensajeError = error;
          this.pressButton = false;
          this.cargando = false;
        },

        complete: () => {
          this.pressButton = false;
          this.cargando = false;

          this.router.navigate(['']);
          location.reload();
          //this.Cookie.set("UserLogin", "1")

          console.info('complete');
        },
      });
    }
  }
}

//console.log('bomborazzclat')
