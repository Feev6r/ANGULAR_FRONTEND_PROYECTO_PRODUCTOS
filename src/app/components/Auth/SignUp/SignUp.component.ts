import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User_Writing } from '../../../Models/User_WritingModel.component';
import { AuthServiceService } from '../../../Services/ReqRepository/authReq.service';

@Component({
  selector: 'app-registro-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './SignUp.component.html',
  styleUrls: [
    'Styles/inputs-formulario-component.css',
    'Styles/formulario-independientes.component.css',
    'Styles/formulario-General.component.css',
  ],
})
export class SignUpComponent {
  myForm: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private _route: Router
  ) {
    this.myForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordsMatchValidator }
    );
  }

  user: User_Writing = {};
  errorMessage: string = '';

  passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsNotMatch: true };
  }

  EnviarRegistro() {
    if (this.myForm.valid) {
      this.user.Name = this.myForm.value.name;
      this.user.Email = this.myForm.value.email;
      this.user.Password = this.myForm.value.password;

      //console.log(this.user.Email)

      this.authService.SignUpService(this.user).subscribe({
        next: (a) => {},
        error: (error) => {
          this.errorMessage = error.message;
        },

        complete: () => {
          this.errorMessage = 'Succesful!';
          this._route.navigate(['login']);
        },
      });
    }
  }

  clicko() {
    this.errorMessage = '';
  }
}
