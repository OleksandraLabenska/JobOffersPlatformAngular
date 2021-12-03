import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  enviado: boolean = false;
  errorMsg!: string | null;
  isLoading: boolean = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService){ 
    this.loginForm = this.formBuilder.group({
      username: ['',  Validators.required],
      password: ['', Validators.required],
      rememberMe: [false, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login():void{
    this.enviado = true;

    //si no es valido me voy
    if(!this.loginForm.valid)
      return;
    
    this.isLoading = true;
    this.loginService
      .performLogin(new LoginModel(this.loginForm.controls.username.value,
                                  this.loginForm.controls.password.value,
                                  this.loginForm.controls.rememberMe.value, ''))
      .subscribe(respuesta =>{
        console.log(JSON.stringify(respuesta));
        this.router.navigate(['/ofertas']);
        this.isLoading = false;
        this.errorMsg = null;
      }, error =>{
        console.log('ERROR: ' + JSON.stringify(error));
        this.errorMsg = `No se ha podido iniciar la sesion! (${error.error?.error})`;
        this.isLoading = false;
      },
      ()=>{
        this.isLoading = false;
      });

    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    console.log(this.loginForm.value.rememberMe);
  }

  volverListado():void{
    this.router.navigate(['/home']);
  }

}
