import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { constant } from '../../../core/constant/constant';
import { AuthService } from '../../../core/services/auth/auth.service';
import { catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  http=inject(HttpClient)
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.email = params['email'];
    });
    // this.token=decodeURIComponent(this.route.snapshot.queryParams['token'])
    // this.email=decodeURIComponent(this.route.snapshot.queryParams['email'])

    console.log(this.token);
    console.log(this.email);
    // this.confirmEmail()

    this.service.emailconfirm(this.token, this.email).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        this.imageurl = 'failed.png';
        this.message = constant.register.fail;
        return throwError(error);
      })
    ).subscribe(
      (res) => {
        this.message = constant.register.success;
        this.imageurl = 'emails.png';
        console.log(res);
      },
      (error) => {
        // Optional: This can be removed if catchError handles all errors
        console.error('An error occurred in subscribe:', error);
        this.message = constant.register.fail;
        this.imageurl = 'failed.png';
      }
    );
    
    
    

  }
  // async confirmEmail() {
  //   try {
  //     const res = await this.service.emailconfirm(this.token, this.email).toPromise();
  //     this.message = constant.register.success;
  //     this.imageurl = 'emails.png';
  //     console.log(res);
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     this.message = constant.register.fail;
  //     this.imageurl = 'failed.png';
  //   }
  // }

}
