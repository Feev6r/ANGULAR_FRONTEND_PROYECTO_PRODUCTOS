import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../Models/userModel.component';
import { GetInformationService } from '../../Services/getInformation.service';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-registro-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registro-sign-up.component.html',
  styleUrls: [
   'Styles/inputs-formulario-component.css',
   'Styles/formulario-independientes.component.css', 
   'Styles/formulario-General.component.css'
  
  ]
})
export class RegistroSignUpComponent{
myForm: any;

  constructor(private fb: FormBuilder, private authService: AuthServiceService){
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.passwordsMatchValidator});
  }

  user: User = {};

 passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsNotMatch: true };
  }

  EnviarRegistro(){
    
    if(this.myForm.valid){

      this.user.Name = this.myForm.value.name;
      this.user.Email = this.myForm.value.email;
      this.user.Password = this.myForm.value.password;

      console.log(this.user.Email)

      this.authService.signUpService(this.user).subscribe((response) =>{
        if(response.status === 200){


        } 
      })
    }

  }
}
