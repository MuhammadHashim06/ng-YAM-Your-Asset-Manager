import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { constant } from '../../../core/constant/constant';
import { AuthService } from '../../../core/services/auth/auth.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  inputerrormessages = constant.inputerrormessage
  issuccessfull=false
  loginuser = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, this.passwordValidator])
  })
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;
    if (!valid) {
      return { passwordComplexity: true };
    }
    return null;
  }
  constructor(private loginservice: AuthService) { }


  login($event: MouseEvent) {
    $event.preventDefault()

    if (this.loginuser.valid) {
      // debugger;
      this.loginservice.login(this.loginuser.value).pipe(
        catchError(error => {
          if (error.status === 403) {
            // Handle 403 error
            console.error('Access denied. You do not have permission to perform this action.');
            alert('Access denied. You do not have permission to perform this action.');
          }
          // Handle other errors if needed
          return throwError(error);
        })
      ).subscribe(
        (res) => {
          this.issuccessfull=true
          setTimeout(() => {
            this.issuccessfull=false
          }, 3000);
        },
        (error) => {
          // Optionally handle the error here if you want to do something specific
          console.error('An error occurred:', error);
        }
      );
    }
    else {
      this.loginuser.markAllAsTouched()
    }

  }

}
