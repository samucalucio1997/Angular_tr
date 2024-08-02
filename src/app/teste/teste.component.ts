import { Component, numberAttribute, OnInit } from '@angular/core';
import { ServicoArmazenService } from './servico-armazen.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teste',
  standalone: false,
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
   form: FormGroup;
   posts: {id:number, titulo:string, descricao:string, horario:number}[] = [];

   
   constructor(private formb:FormBuilder, 
      private servico:ServicoArmazenService,
      private router: Router) {
      this.form = this.formb.group({
         matricula: ['',Validators.required],
         nome: ['', Validators.required],
         email: ['', Validators.email],
      })
   }

   onSubmit() {
      const aluno = {id: this.generateRandomId(1500000), nome: this.form.value.nome, email: this.form.value.email, matricula: this.form.value.matricula};
      this.servico.adicionarAluno(aluno);
      this.form.reset();
      this.router.navigate(['/detalhe'], {queryParams: {id: aluno.id}});
   }


   generateRandomId(length: number): number {
      const min = Math.pow(10, length - 1);
      const max = Math.pow(10, length) - 1;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
   renderizarPosts() {
       this.servico.pegarPost().subscribe((posts) => {
             this.posts = posts;
       });
   }



}
