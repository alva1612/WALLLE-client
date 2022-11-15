import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/security/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  nombreUsuario = "";
  rol : string = "";

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserNameComplete()|| '{}';
      this.rol = this.tokenService.getAuthorities().length > 0 ? this.tokenService.getAuthorities()[0] : '';
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
      this.rol = ""
    }
  }

  firstLetterUpperCase(str: string) {
    if(str.length > 0){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return ""
  }

  logOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
