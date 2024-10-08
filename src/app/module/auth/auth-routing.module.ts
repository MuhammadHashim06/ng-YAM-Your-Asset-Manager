import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmemailComponent } from './confirmemail/confirmemail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'login',
    pathMatch: 'full'
  },{
    path: 'login',
    component:LoginComponent,
  },{
    path:'signup',
    component:SignupComponent
  },{
    path:'EmailConfirmation',
    component:ConfirmemailComponent
  },{
    path:'resetpassword',
    component:ResetpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
