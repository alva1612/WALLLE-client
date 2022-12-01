import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { ByMonthComponent } from './by-month/by-month.component';
import { ByScoreComponent } from './by-score/by-score.component';
import { AppRoutingModule } from '../app-routing.module';
import {ChartModule} from 'primeng/chart';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    PageComponent,
    ByMonthComponent,
    ByScoreComponent,
    StatsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ChartModule,
    CalendarModule,
    FormsModule
  ],
  exports: [
    PageComponent
  ]
})
export class DashboardModule { }
