import { HttpClient, HttpParams } from '@angular/common/http';
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
  getReportByMonth(start: string, end: string) {
    const params = new HttpParams()
      .set('start',start)
      .append('end',end)

    return this.http.get<any[]>(this.baseUrlDashboard+"/por-mes",{params})
  }
  getDash() {
    return this.http.get<any>(this.baseUrlDashboard)
  }
}
