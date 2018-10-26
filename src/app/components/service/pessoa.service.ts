import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';

const URL_API_LISTAGEM = 'http://localhost:8080/pessoa';
const URL_API_INSERIR = 'http://localhost:8080/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(URL_API_LISTAGEM);
  }

  inserirBanco(pessoa: Pessoa): Observable<Pessoa[]>{
    return this.http.post<Pessoa[]>(URL_API_INSERIR, pessoa);
  }

}
