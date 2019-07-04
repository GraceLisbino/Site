import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';//
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
//import { DataFormComponent } from './data-form/data-form.component';
import { FormularioComponent } from './clientes/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
//DataFormComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule//
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } */
