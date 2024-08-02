import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component'; // Certifique-se de importar o componente AppComponent

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TesteComponent } from './teste/teste.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    DetalheComponent
    // DiretivaMouseOver// Adicione o AppComponent à propriedade declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent], // Adicione o AppComponent à propriedade bootstrap se estiver usando inicialização automática
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }