import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component'; // Certifique-se de importar o componente AppComponent
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './login/api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // Adicione o AppComponent à propriedade declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Adicione o AppComponent à propriedade bootstrap se estiver usando inicialização automática
})
export class AppModule { }