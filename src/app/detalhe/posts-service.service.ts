import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private httpClient: HttpClient) { }

  adicionarPost(post: { id: number; titulo: string; descricao: string; horario: string; }): void {
    this.httpClient.post<{ id: number; titulo: string; descricao: string; horario: string; }>('https://3.128.249.166:3000/posts', post);
  }
}
