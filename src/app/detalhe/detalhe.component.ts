import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})
export class DetalheComponent implements OnInit{
 
  recebido:string = '';
  
  constructor(
    private router: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
     this.router.queryParams.subscribe(params => {
        this.recebido = params['filtro'];
     })
  }
}
