import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './security/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'walle-client';

  isLogged = false;
  nombreUsuario = "";
  constructor(http: HttpClient,
    private tokenService: TokenService,
    private _router: Router){

  }


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserNameComplete()|| '{}';
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
      this._router.navigate(['/login'])
    }
  }
}
