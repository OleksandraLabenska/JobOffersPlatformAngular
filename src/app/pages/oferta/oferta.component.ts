import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { HomeService } from './../../services/home.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [HomeService]
})
export class OfertaComponent implements OnInit {

  public arrayOferta: Array<any>;
  public id: any;
  public sub: any;
  public response: any;
  
  constructor(
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void { 
    this.sub = this.route.paramMap.subscribe((parms: ParamMap)=>{

      this.id = parms.get('id');
      this.homeService.getDataOferta(this.id).subscribe(
        response =>{
          this.response = response;          
        },
        error => {
          console.log("Error" + JSON.stringify(error));
      })
    });
  }

   ngOnDestroy():void{
       this.sub.unsubscribe();
  }
}
