import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa.model';

const URL_API_LISTAGEM = 'http://localhost:8081/pessoa';
const URL_API_INSERIR = 'http://localhost:8081/pessoa';
const URL_API_DELETAR = 'http://localhost:8081/pessoa/deletar/';
const URL_API_BUSCA_POR_CPF = 'http://localhost:8081/pessoa/';
const URL_API_ALTERAR = 'http://localhost:8081/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  constructor(private http: HttpClient) {}
  
  buscarTodos(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(URL_API_LISTAGEM);
  }
  
  buscarPorCpf(cpfAlterar: string): Observable<Pessoa> {
    return this.http.get<Pessoa>(URL_API_BUSCA_POR_CPF + cpfAlterar);
  }

  inserirBanco(pessoa: Pessoa): Observable<void>{
    return this.http.post<void>(URL_API_INSERIR, pessoa);
  }

  deletarBanco(cpf: string): Observable<void>{
    return this.http.delete<void>(URL_API_DELETAR + cpf);
  }

  alterarPessoa(pessoa: Pessoa): Observable<void>{
    return this.http.put<void>(URL_API_ALTERAR, pessoa);
  }

}
