import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ableToChangeState: boolean = true

  constructor(private tokenService: TokenService,
    private _router: Router) { 
      if (this.isAbleToChangeState){
        console.log("entro aqui")
        this.ableToChangeState = true
      }
    
    }

    get isAbleToChangeState(): boolean {
      return this.tokenService.roles.some(rol => {
         if (rol === 'administrador' ){
          console.log("entro aqui")
          return true
         }else{
          console.log("entro aqui en false")
          return false
         }
        
        
           
       
       })
     }

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
    this._router.navigate(['/login'])
    this.isLogged = false

  }

}
