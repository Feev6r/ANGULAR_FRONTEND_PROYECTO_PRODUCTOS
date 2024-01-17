import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../Models/userModel.component';
import { GetInformationService } from '../../Services/getInformation.service';
import { LoadingCircleComponent } from "../loading-circle/loading-circle.component";
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
    selector: 'app-log-in',
    standalone: true,
    templateUrl: './log-in.component.html',
    styleUrls: ['Styles/General-form.component.css', 'Styles/Independent-subForm.component.css', 'Styles/Input-subForm.component.css'],
    imports: [CommonModule, ReactiveFormsModule, LoadingCircleComponent]
})
export class LogInComponent {

  public mensajeError: string = '';
  public user: User = {};
  public cargando: boolean = false;
  public pressButton: boolean = false;

  constructor(private tempService: GetInformationService, private authService: AuthServiceService){}

  loginform = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('')
  })

  Mimetodo(){

    this.pressButton = true;
    this.cargando = true;

    if(!this.loginform.value.name){

      this.mensajeError = "Coloque un nombre"
      this.pressButton = false;
      this.cargando = false;
    
      return

    }
    else if(!this.loginform.value.password){

      this.mensajeError = "Coloque una contraseña"
      this.pressButton = false;
      this.cargando = false;

      return

    }
   else{

    this.mensajeError = '';

    this.user.Name = this.loginform.value.name;
    this.user.Password = this.loginform.value.password;
  

    this.authService.logginService(this.user).subscribe({

      next: (token) => {

        localStorage.setItem('CSRF_TOKEN', token.body);

      },

      error: (error) => {

        this.mensajeError = error
        this.pressButton = false;
        this.cargando = false;

      },

      complete: () => {

        this.pressButton = false;
        this.cargando = false;
        console.info('complete') 

      }
    })   
  }

  }
}


//console.log('bomborazzclat')
