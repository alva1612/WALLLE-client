import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  total: number = 40
  current: number = 20
  no_iniciado: number = 0
  finalizado: number = 0
  cancelado: number = 0
  show: boolean =false
  results: any[] = []
  options: any
  start: string = ''
  end: string = ''

  data: any
  constructor(private _dash: DashboardService) {
    this._dash.getDash().subscribe( data => {
      console.log(data)
      this.show = true
      this.total = data.total
      this.current = data.enproceso
      this.no_iniciado = data.noiniciado
      this.finalizado = data.finalizado
      this.cancelado = data.cancelado
    })

    const startDate = new Date()
    const endDate = new Date(startDate.getTime() - 7 * 24 * 60 * 60 * 1000);

    this.start = endDate.toLocaleDateString()
    this.end = startDate.toLocaleDateString()
    const localStart = `${startDate.getFullYear()}/${startDate.getMonth()+1}/${startDate.getDate()}`
    const localEnd = `${endDate.getFullYear()}/${endDate.getMonth()+1}/${endDate.getDate()}`

    console.log(localStart, localEnd)
    this._dash.getReportByMonth(localEnd, localStart).subscribe(data => {
      this.results = data
      console.log('Fecha',data)

    this.data = {
      labels: this.results.map(result => result.nombres),
      datasets: [
          {
            label: 'Tickets',
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
   this.options = {
    indexAxis: 'y',
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
};
  }

  ngOnInit(): void {
  }

}
