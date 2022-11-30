import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-by-score',
  templateUrl: './by-score.component.html',
  styleUrls: ['./by-score.component.css']
})
export class ByScoreComponent implements OnInit {

  colorsArray: string[] = ['','gray','red','orange','green','gold']

  stackedData: any = {}
  stackedOptions: any = {}
  constructor(
    private _dashService: DashboardService
  ) {
    this._dashService.getReportByScore().subscribe(x => {
      const uniqueNames= [... new Set(x.map(result => result.nombres))]
      const uniqueStarAmounts = [... new Set(x.map(result => result.estrellas))]
      const datasets: any[] = []
      uniqueStarAmounts.forEach( starAmount => {
        const data: number[] = []
        uniqueNames.forEach(name => {
          const amount = x.find(data => (data.nombres === name && data.estrellas === starAmount))
          if (amount)
          data.push(amount.cantidad)
          else
          data.push(0)
        })
        datasets.push({
          type: 'bar',
          label: `${starAmount} estrellas`,
          backgroundColor: this.colorsArray[starAmount],
          data
        })
      })
      console.log(datasets)
      this.stackedData = {
        labels: uniqueNames,
        datasets
      }
    })
   }

  ngOnInit(): void {
    this.stackedOptions = {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      responsive: true,
      scales: {
          xAxes: {
              stacked: true,
          },
          yAxes: {
              stacked: true
          }
      }
    };

  }

}
