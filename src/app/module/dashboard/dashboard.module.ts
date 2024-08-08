import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    SidebarComponent,
    BoardComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterOutlet
  ]
})
export class DashboardModule { }
