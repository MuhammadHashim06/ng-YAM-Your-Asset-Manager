import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { constant } from '../../../core/constant/constant';
import { AuthService } from '../../../core/services/auth/auth.service';
import { catchError, throwError } from 'rxjs';
import { Alert } from '../../../shared/reusablecomponents/alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
verifyrmail($event: MouseEvent) {
  $event.preventDefault()
  
const email={email:this.email}
  this.loginservice.verifyemail(email).pipe(
    catchError(error=>{
      console.error(error)
      return throwError(error)
    })
  ).subscribe((res)=>{
    console.log(res);
    
  },(error)=>{
    console.error(error);
  })
}

  inputerrormessages = constant.inputerrormessage
  issuccessfull=false
  alertData: Alert={
    type:'success',
    message:''
  };
  isforget=false;
email: string='';
  forget(){
    this.isforget=true;
  }
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
      this.loginservice.login(this.loginuser.value).pipe(
        catchError(error => {
          if (error.status === 400 || error.status===404 ) {
            // Handle 403 error
            console.error('Email or Passowrd is Not correct');
            alert('User Not Found Check, Please Check Your Credential');
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
          console.log(res);
          this.alertData = {
            type: 'success',
            message:res.responceData.message
          };      
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
