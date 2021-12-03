import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthHttpInterceptor } from './interceptors/auth-http.interceptor';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { LoginComponent } from './pages/login/login.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    InterceptorsModule
  ],
  providers: [
   // {provide: HTTP_INTERCEPTORS, useClass: LogHttpInterceptor, multi: true},
    //{provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
