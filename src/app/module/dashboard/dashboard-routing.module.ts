import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children:[
    {
      path: 'asset',
      loadChildren: () => import('./submodule/asset/asset.module').then(m => m.AssetModule)
    },{
      path: 'user',
      loadChildren:()=>import('./submodule/user/user.module').then(m=>m.UserModule)
    },
  ]
},{
  path:'**',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
