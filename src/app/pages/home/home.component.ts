import { HomeService } from './../../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})

export class HomeComponent implements OnInit {

  public arrayListadoOfertas: Array<any>;

  constructor(
    private homeService: HomeService,
    private  router: Router) {}

  ngOnInit(): void{
    this.homeService.getData().subscribe(
      response =>{
        console.log(JSON.stringify(response));
        this.arrayListadoOfertas = response;
      },
      error =>{
        console.log('Error ' + JSON.stringify(error));
      }
    );
  }

  public goToLogin(): void{
    this.router.navigate(['login']);
  }

  public goToOferta(id): void{
    this.router.navigate(['/oferta', id]);
  }
}





