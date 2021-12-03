import { AppEndPoints } from './../../endpoints.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfertaForm } from 'src/app/model/ofertaForm';
import { HomeService } from 'src/app/services/home.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css']
})
export class NuevaOfertaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router,) {}

  ngOnInit(): void {
  }

  formularioOferta = this.formBuilder.group({
    titulo: ['', Validators.required],
    descripcion: ['', Validators.required],
    empresa: ['', Validators.required],
    salario: ['', Validators.required],
    ciudad: ['', Validators.required],
    email: ['',  Validators.compose([Validators.email, Validators.required])],

  },
  {});

  sendForm(): void {

    let value: OfertaForm = new OfertaForm(
      this.formularioOferta.value.titulo,
      this.formularioOferta.value.descripcion,
      this.formularioOferta.value.empresa,
      this.formularioOferta.value.salario,
      this.formularioOferta.value.ciudad,
      this.formularioOferta.value.email

    );

    this.homeService.createOferta(value).subscribe(
      response =>{
      },
      error =>{
        console.log('Error ' + JSON.stringify(error));
      }
      
    );

    console.log("Oferta: " + JSON.stringify(value));

  }

  volver():void{
    this.router.navigate(['/ofertas']);
  }

}
