import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { DetalheComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  {path:'',component: AppComponent},
  {path:'prova', component: TesteComponent},
  {path:'detail',component: DetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }