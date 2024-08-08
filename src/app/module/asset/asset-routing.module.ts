import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetdetailComponent } from './assetdetail/assetdetail.component';

const routes: Routes = [{
  path:'',
  redirectTo:'asset',
  pathMatch:'full'
},{
  path:'asset',
  component:AssetdetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
