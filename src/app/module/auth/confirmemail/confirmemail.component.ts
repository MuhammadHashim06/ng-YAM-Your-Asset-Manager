import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { constant } from '../../../core/constant/constant';
import { AuthService } from '../../../core/services/auth/auth.service';
import { catchError, throwError } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-confirmemail',
  templateUrl: './confirmemail.component.html',
  styleUrl: './confirmemail.component.scss'
})
export class ConfirmemailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service : AuthService) { }
  verification = false
  token = ''
  email = ''
  imageurl = ''
  message:any
  ngOnInit(): void {

    // this.route.queryParams.subscribe(params => {
    //   this.token = params['token'];
    //   this.email = params['email'];
    // });
    this.token=this.route.snapshot.queryParams['token']
    this.email=this.route.snapshot.queryParams['email']

    // console.log(this.token);
    // console.log(this.email);
    
    this.service.emailconfirm(this.token,this.email).pipe(
      catchError(error => {
        console.log(error);
         this.imageurl='failed.png'
        // if (error.status === 403) {
        //   // Handle 403 error
        //   console.error(error);
        // }
        // Handle other errors if needed
        this.message=constant.register.fail.emailverification
        return throwError(error);
      })
    )
    .subscribe((res)=>{
      this.message=constant.register.success
      this.imageurl='emails.png'
      console.log(res);
      
    },(error) => {
      // Optionally handle the error here if you want to do something specific
      console.error('An error occurred:', error);
      this.message=constant.register.fail
      this.imageurl='failed.png'
    })

  }

}
