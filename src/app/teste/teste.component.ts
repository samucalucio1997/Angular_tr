import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: false,
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
   lista:string[] = []
   nome='';

   adicionarNome(){
      this.lista.push(this.nome);
      console.log(this.lista);
    }
}
