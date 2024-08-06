import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsServiceService } from './posts-service.service';

@Component({
  selector: 'app-detalhe',
  standalone: false,
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent implements OnInit{
  
  idrecebido:number = 0;
  posts: FormGroup;
  
  constructor(
    private formb:FormBuilder,
    private router: ActivatedRoute,
    private service: PostsServiceService
  ) {
    this.posts = this.formb.group({
       titulo: ['', Validators.required],
       descricao: ['', Validators.required],
       horario: ['', Validators.pattern('99/99/9999 99:99')],
      });
  }
  
  ngOnInit(): void {
    this.router.queryParams.subscribe(params => { // trocar para paramsMap
      console.log(params['id']);
      this.idrecebido = params['id'];
    })
  }

  onSubmit() {
      const post = {id: this.generateRandomId(1500000), titulo: String(this.posts.value.titulo), descricao: String(this.posts.value.descricao), dataHora: String(this.posts.value.horario), estudanteId: this.idrecebido};
      this.service.adicionarPost(post);
  }


  generateRandomId(length: number): number {
      const min = Math.pow(10, length - 1);
      const max = Math.pow(10, length) - 1;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
