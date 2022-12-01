import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-by-month',
  templateUrl: './by-month.component.html',
  styleUrls: ['./by-month.component.css']
})
export class ByMonthComponent implements OnInit {
  monthSelect: Date[] = []
  results: any[] = []
  data: any = {}
  chartOptions: any

  constructor(private _dashboardServce: DashboardService) { }

  ngOnInit(): void {
  }

  onChange(event: Date[]) {
    console.log(event)
    const startDate = event[0]
    const endDate = event[1]

    const localStart = `${startDate.getFullYear()}/${startDate.getMonth()+1}/${startDate.getDate()}`
    const localEnd = `${endDate.getFullYear()}/${endDate.getMonth()+1}/${endDate.getDate()}`

    console.log(localStart, localEnd)
    this._dashboardServce.getReportByMonth(localStart, localEnd).subscribe(data => {
      this.results = data

    this.data = {
      labels: this.results.map(result => result.nombres),
      datasets: [
          {
              data: this.results.map(result => result.tickets),
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
          }
      ]
  };
    })

  }
}
