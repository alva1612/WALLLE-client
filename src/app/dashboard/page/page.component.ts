import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  get currentRoute() {
    if (this.route.children && this.route.children[0])
      return this.route.children[0].snapshot.routeConfig?.path
    return 'dashboard'
  }
  toByScore() {
    this.router.navigate(['por-ranking'], {relativeTo:this.route})
  }
  toByMonth() {
    this.router.navigate(['por-mes'], {relativeTo:this.route})
  }
  isRouteActive(route: string) {
   switch(route) {
    case 'mes':
      if (this.currentRoute === 'por-mes')
        return true
      return false
    case 'ranking':
      if (this.currentRoute === 'por-ranking')
        return true
      return false
    case 'dashboard':
      if (this.currentRoute === '')
        return true
      return false
    default:
      return false
   }
  }

}
