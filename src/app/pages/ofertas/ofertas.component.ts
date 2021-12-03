import { LoginModel } from './../../model/login.model';
import { LoginService } from './../../services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})

export class OfertasComponent implements OnInit {

  public arrayListadoOfertas: Array<any>;
  public sub: any;
  public id: any;
  public response: any;
  public token: any;

  usuario: LoginModel | null;
  myToken: any;
 // headers: HttpHeaders;

  constructor(private homeService: HomeService,
    private  router: Router,
   // private httpClient: HttpClient,
   // private route: ActivatedRoute,
    private loginService:LoginService){ 
      loginService.login.subscribe(usuario => this.usuario = usuario);
      this.myToken = loginService.retorno;
    }

  hayUsuario(): boolean{
    return this.usuario != null;
  }

  logout():void{
    this.loginService.performLogout();
  }

  ngOnInit(): void {
    this.homeService.getData().subscribe(
      response =>{
        console.log("My token:" + JSON.stringify(this.myToken));
        console.log(JSON.stringify(response));
        this.arrayListadoOfertas = response;
      },
      error =>{
        console.log('Error ' + JSON.stringify(error));
      }
    );
  }

  public eliminarOferta(id):void{ 

    this.homeService.borrarOferta(id).subscribe(
      response =>{
        this.response = response; 
        console.log(JSON.stringify(response)); 
        this.ngOnInit();        
      },
      error => {
        console.log("Error" + JSON.stringify(error));
      }
    )
  }

  public goToOferta(id): void{
    this.router.navigate(['/oferta', id]);
  }

  public goToNuevaOferta(): void{
    this.router.navigate(['nueva-oferta']);
  }

  public goToLogin(): void{
    this.router.navigate(['login']);
  }
}
