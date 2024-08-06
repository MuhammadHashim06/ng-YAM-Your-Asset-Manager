import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { constant } from '../../../core/constant/constant'
import { error } from 'console';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  inputerrormessages=constant.inputerrormessage
 load=false
isemailregister=false;
accountsuccessmessage=constant.register.success.accountsuccess
verificationmessage=constant.register.success.verificationmessage
  constructor(private registerservice : AuthService){}
  registeruser = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required,Validators.minLength(6),this.passwordValidator])
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
   verify($event: MouseEvent) {
    $event.preventDefault();
    this.load=true;
    // debugger;
    this.registerservice.signup(this.registeruser.value).pipe(
      
      catchError(error => {
        if (error.status === 403) {
          this.load=false
          // Handle 403 error
          console.error('Access denied. You do not have permission to perform this action.');
          alert('Access denied. You do not have permission to perform this action.');
        }
        // Handle other errors if needed
        return throwError(error);
      })
    ).subscribe(
      (res) => {
        this.load=false
        // alert(res.responceData[0]);
        this.isemailregister=true;
      },
      (error) => {
        this.load=false
        // Optionally handle the error here if you want to do something specific
        console.error('An error occurred:', error);
      }
    );
//     this.registerservice.signup(this.registeruser.value).subscribe({next:(res)=>{
//       alert(res.responceData)
//     }}),({next:(error:any)=>{
// console.log(error);
//     }})
    
    this.registeruser.setValue({
      email: '',
      userName: '',
      password: '',
    })
    this.registeruser.markAsUntouched()
  }

}
