import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoArmazenService {
   
  
  constructor( private Service:HttpClient ) {}


  adicionarAluno(Aluno:{id:number, matricula: string, nome: string, email:string}):void{
      this.Service.post<{id:number, matricula: string, nome: string, email:string}>("https://3.128.249.166:3000/students", Aluno).subscribe(
        e => console.log(e)
      );
  }


  pegarPost():Observable<{id:number, titulo:string, descricao:string, dataHora:number, idEstudante: number}[]>{
    return this.Service.get<{id:number, titulo:string, descricao:string, dataHora:number, idEstudante: number}[]>("https://3.128.249.166:3000/posts");
  }

  
}
