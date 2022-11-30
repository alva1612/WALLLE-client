import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ByMonthComponent } from './by-month/by-month.component';
import { ByScoreComponent } from './by-score/by-score.component';
import { AppRoutingModule } from '../app-routing.module';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    PageComponent,
    ByMonthComponent,
    ByScoreComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ChartModule
  ],
  exports: [
    PageComponent
  ]
})
export class DashboardModule { }
