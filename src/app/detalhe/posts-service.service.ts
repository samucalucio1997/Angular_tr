import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private httpClient: HttpClient) { }

  adicionarPost(post: { id: number, titulo: string, descricao: string, dataHora: string, estudanteId: number}): void {
    this.httpClient.post<{ id: number, titulo: string, descricao: string, dataHora: string, estudanteId: number}>('https://3.128.249.166:3000/posts', post).subscribe(
      e => console.log(e)
    );
  }
}
