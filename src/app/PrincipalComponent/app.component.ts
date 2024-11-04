import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../Services/ReqRepository/userReq.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from '../Services/ReqRepository/authReq.service';
import { RouterOutlet, Router } from '@angular/router';
import { LogInComponent } from '../components/Auth/LogIn/LogIn.component';
import { DescripcionProductoComponent } from '../components/Show-Products-Edit-Products/descripcion-producto/descripcion-producto.component';
import { ShowProductComponent } from '../components/Show-Products-Edit-Products/mostrar-productos/Show-Product.component';
import { OrdersReqService } from '../Services/ReqRepository/orders-req.service';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: [
    '../general.component.css',
    './Css/NavBar/navBarGeneral.component.css',
    './Css/NavBar/navBarLeftContainer.component.css',
    './Css/NavBar/navBarRightContainer.component.css',
    './Css/NavBar/navBarSearch.component.css',
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ShowProductComponent,
    DescripcionProductoComponent,
    FormsModule,
    ReactiveFormsModule,
    LogInComponent,

  ],
})
export class AppComponent implements OnInit {
  title = 'Application_Proyecto_1';

  mostrar: boolean = false;
  UserName: string = '';
  isLoggin: boolean = false;
  totalOrders: number = 0;

  constructor(
    private _userService: UserService,
    private _cookie: CookieService,
    private _authService: AuthServiceService,
    private _route: Router,
    private _ordersServiceReq: OrdersReqService

  ) { }


  ngOnInit(): void {
    if (this._cookie.check('UserSession')) {
      // console.log("esta la cookie disponible");

      this._userService.getUserInformation().subscribe((User) => {
        localStorage['userName'] = User.name
        this.UserName = User.name;
        this.isLoggin = true;
      });

      this._ordersServiceReq.GetTotalOrders().subscribe(total => {
        this.totalOrders = total;
      })
      //si no hay cookie userssesion verifcar si estoy autenticado para ver si fue eliminada intencionalmente
    }
  }

  LogOut() {
    this._route.navigate(['/']);

    this._authService.LoggoutService().subscribe({
      complete: () => {
        localStorage.removeItem('CSRF-TOKEN');
        localStorage.removeItem('userName');
        location.reload();
      },
    });
  }

  DesplegarMenu() {
    this.mostrar = !this.mostrar;
  }
}
