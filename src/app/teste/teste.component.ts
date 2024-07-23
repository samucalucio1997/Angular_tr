import { Component } from '@angular/core';
import { ServicoArmazenService } from './servico-armazen.service';

@Component({
  selector: 'app-teste',
  standalone: false,
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
   lista:{nome:string , data:number}[] = []
   nome='';
   data:number = 0;
   id:number = 0;

   constructor(private service: ServicoArmazenService) {} 

   adicionarNome(){
      console.log('Adicionando nome: ', this.nome);
      this.service.adicionarNome(this.lista,this.nome,this.data,this.id);
      this.nome = '';
      this.data = 0;
   }
}
