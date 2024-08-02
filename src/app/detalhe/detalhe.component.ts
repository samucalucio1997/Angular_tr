import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  standalone: false,
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent implements OnInit{
  
  idrecebido:string = '';
  posts: FormGroup;
  
  constructor(
    private formb:FormBuilder,
    private router: ActivatedRoute
  ) {
    this.posts = this.formb.group({
       titulo: ['', Validators.required],
       descricao: ['', Validators.required],
       horario: ['', Validators.required]
      });
  }
  
  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.idrecebido = params['id'];
    })
  }

  onSubmit() {
      const post = {id: this.generateRandomId(1500000), title: this.posts.value.titulo, description: this.posts.value.descricao, dataHora: this.posts.value.horario};
      
  }


  generateRandomId(length: number): number {
      const min = Math.pow(10, length - 1);
      const max = Math.pow(10, length) - 1;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
