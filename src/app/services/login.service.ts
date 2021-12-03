import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel } from './../model/login.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

const LOGIN_KEY = 'login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginModelBehaviorSubject: BehaviorSubject<LoginModel | null>;
  public login: Observable<LoginModel | null> //hay alguien logado o no
  public retorno;

  constructor(private http: HttpClient,
    private route: Router) 
  { 
    this.loginModelBehaviorSubject = new BehaviorSubject<LoginModel | null>(JSON.parse(<string> localStorage?.getItem(LOGIN_KEY)));
    this.login = this.loginModelBehaviorSubject.asObservable();
  }


  performLogin(entrada: LoginModel): Observable<LoginModel>{
    console.log('performLogin('+ JSON.stringify(entrada) + ')');
    return this.http
      .post<LoginModel>('https://cev-psp-ej2-back.herokuapp.com/api/authenticate', entrada)
      .pipe(map(retornoAPI => {
        console.log('Login ok ' + JSON.stringify(retornoAPI));
        this.loginModelBehaviorSubject.next(retornoAPI);//Enviamos la info quien esta suscrito
        localStorage.setItem(LOGIN_KEY, JSON.stringify(retornoAPI));
        this.retorno = retornoAPI;
        return retornoAPI;
      }));
  }

  performLogout():void{
    localStorage.removeItem(LOGIN_KEY);//удаляет пользователя с памяти
    this.loginModelBehaviorSubject.next(null);// info que ya no hay nadie suscrito
    this.route.navigate(['/login']);

  }
}
