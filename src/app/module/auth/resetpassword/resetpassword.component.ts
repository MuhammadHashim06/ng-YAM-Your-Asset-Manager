import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { constant } from '../../../core/constant/constant';
import { catchError, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {
  passwordmatch: string = ''
  router = inject(Router)
  SetPassword($event: MouseEvent) {
    $event.preventDefault()
    if (this.userPassword.valid) {
      if (this.userPassword.controls['password'].value == this.userPassword.controls['confirmpassword'].value) {
        const password = {
          newPassword: this.userPassword.controls['password'].value,
          confirmedNewPassword: this.userPassword.controls['confirmpassword'].value,
          email: this.activeroute.snapshot.queryParams['email'],
          token: this.activeroute.snapshot.queryParams['token'],
        }
        console.log(password);
        
        this.service.resetemail(password).pipe(
          catchError(error=>{
            console.error(error)
            return throwError(error)
          })
        ).subscribe((res)=>{
          console.log(res);
          this.router.navigateByUrl('/auth/login')
          
        })
      } else {
        this.passwordmatch = this.inputerrormessages.passwordmatch
      }

    } else {
      this.userPassword.markAllAsTouched()
    }

  }

  inputerrormessages = constant.inputerrormessage
  userPassword = new FormGroup({
    password: new FormControl('', [Validators.required, this.passwordValidator]),
    confirmpassword: new FormControl('', [Validators.required, this.passwordValidator])

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

  constructor(private service: AuthService, private activeroute:ActivatedRoute) { }



}
