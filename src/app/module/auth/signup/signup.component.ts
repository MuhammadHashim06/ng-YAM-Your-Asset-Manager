import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private registerservice : AuthService){}
  registeruser = new FormGroup({
    email: new FormControl('', Validators.required,),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  verify($event: MouseEvent) {
    $event.preventDefault()
    debugger;
    this.registerservice.signup(this.registeruser.value).subscribe({next:(res)=>{
      console.log(res);
      
    }})
    // console.log(this.registeruser.value);
    
  }

}
