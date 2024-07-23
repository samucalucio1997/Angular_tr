import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoArmazenService {
   
  adicionarNome(lista:{nome:string , data:number}[],nome:string,data:number,id:number):void{
    console.log(data);
    lista.push({nome:nome, data:data});
    id++;
  }

  
}
