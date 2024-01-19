import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = 'https://rickandmortyapi.com/api/character/'
  conc:string = ''
  constructor(private httpClient: HttpClient) {}
  consultaApi(conc:string):Observable<any>{
    this.conc = conc
    return this.httpClient.get(this.url+this.conc);
  }
}
