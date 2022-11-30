import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrlDashboard = AppSettings.API_ENDPOINT + '/dashboard';

  constructor(private http: HttpClient) { }

  getReportByScore() {
    return this.http.get<any[]>(this.baseUrlDashboard+"/por-score");
  }
}
