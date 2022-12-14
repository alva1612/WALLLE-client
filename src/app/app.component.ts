import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './security/token.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingService } from './services/loading.service';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walle-client';
  route: string = ''
  loading$ = this.loader.loading$

  isLogged = false;
  nombreUsuario = "";
  constructor(http: HttpClient,
    private tokenService: TokenService,
    private _router: Router,
    private location: Location,
    public loader: LoadingService,
    // @Inject(DOCUMENT) Document: any
    ){
      this.route = _router.url
      // console.log("prueba de document" + document.location.href);

      this._router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.route = event.url
        }
        if (event instanceof NavigationEnd) {
          this.route = event.url
        }
      })
  }


  ngOnInit(): void {

    // console.log("prueba de router" + this._router.navigateByUrl)
    // console.log("prueba de location" + this.location.path)
    console.log("prueba de location la ultima " + window.location.href)

    var idk:string = window.location.href;


    const query = idk.lastIndexOf("/");
    const query2 = idk.lastIndexOf("");
    // const query2 = idk;

  //  console.log("probando el query = " + query2)
  //   console.log("probando el query2 = " + idk.substring(0,query+1));
    var idk2:string = idk.substring(0,query+1);
    var idk3:string = idk.substring(query2,36);
    var idk4:string = idk.substring(query2,34);

    console.log("http://localhost:4200/feedback?id=" + idk4)

    if(window.location.href == "http://localhost:4200/agregarTicket" || idk == idk2 + idk3 && window.location.href != "http://localhost:4200/" || window.location.href == "http://localhost:4200/feedback?id=" + idk4 || window.location.href == "http://localhost:4200/cliente"){



      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserNameComplete()|| '{}';
    }
    else{
      if (this.tokenService.getToken()) {
        this.isLogged = true;
        this.nombreUsuario = this.tokenService.getUserNameComplete()|| '{}';

        console.log("cayo aqui en el if")

      } else {

        this.isLogged = false;
        this.nombreUsuario = '';
        this._router.navigate(['/login'])
      }
    }


  }

}
