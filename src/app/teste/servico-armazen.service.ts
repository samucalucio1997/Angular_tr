import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoArmazenService {
   
  
  constructor( private listaService:HttpClient ) {}


  adicionarNome(lista:{id:number ,name:string , email: string}[],nome:string,email:string,id:number):void{
    lista.push({id:id, name:nome, email:email});
  }

  preencherData():Observable<{id:number, name:string , email:string}[]>{
    return this.listaService.get<{id:number, name:string , email:string}[]>("https://3.128.249.166:3000/clients"); 
  } 

  
}
