import { AppEndPoints } from './../endpoints.component';
import { Injectable } from "@angular/core";
//import { ContactForm } from "../model/contactForm";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { OfertaForm } from '../model/ofertaForm';

const LOGIN_KEY = 'login';


@Injectable({
    providedIn: 'root'
})

export class HomeService{
   
    headers: HttpHeaders;
    token:any;

    constructor(private http: HttpClient){}

    public getData(): Observable<any>{
        let url = AppEndPoints.ENDPOINTLISTADOOFERTAS + '/api/ofertas';
        return this.http.get(url);
    }

    public getDataOferta(id:number): Observable<any>{
        let url = AppEndPoints.ENDPOINTLISTADOOFERTAS + "/api/ofertas/" + id;
        return this.http.get(url);
    }

    getToken():void{
        this.token = JSON.parse(<string>localStorage.getItem(LOGIN_KEY))['id_token'];
        if(this.token!=null){
            this.headers = new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization' : 'Bearer ' + this.token});
        }else{
            console.log("Error!!!");
        }
    }

    createOferta(oferta:OfertaForm):Observable<OfertaForm>{
        this.getToken();
        let url = AppEndPoints.ENDPOINTLISTADOOFERTAS + "/api/ofertas";
        return this.http.post<OfertaForm>(url, oferta, {headers:this.headers});
    }
    
    borrarOferta(id:number): Observable<any>{
        this.getToken();
        let url = AppEndPoints.ENDPOINTLISTADOOFERTAS + "/api/ofertas/" + id;
        return this.http.delete(url,{headers:this.headers});

    }
}


