import { Routes } from '@angular/router';
import { MessageComponent } from './shared/reusablecomponents/message/message.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'auth',
        pathMatch:'full',
    },
    {
        path:'auth',
        loadChildren:()=>import('./module/auth/auth.module').then(m => m.AuthModule)
    },{
        path:'dasboard',
        loadChildren:()=>import('./module/asset/asset.module').then(m=>m.AssetModule)
    },
    {
        path:'**',
        component:MessageComponent
    }
];
