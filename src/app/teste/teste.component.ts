import { Component, OnInit } from '@angular/core';
import { ServicoArmazenService } from './servico-armazen.service';

@Component({
  selector: 'app-teste',
  standalone: false,
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent implements OnInit{
   lista:{id:number, name:string , email:string}[] = []
   nome='';
   email:string = '';
   id:number = 0;

   constructor(private service: ServicoArmazenService) {} 
   ngOnInit(){
      this.preencherData();
      console.log('Lista: ', this.lista);
   }

   adicionarNome(){
      console.log('Adicionando nome: ', this.nome);
      this.service.adicionarNome(this.lista,this.nome,this.email,this.id);
      this.nome = '';
      this.email = '';
   }

   preencherData(){
      this.service.preencherData().subscribe(data => {
         this.lista = data;
      });
   }
}
