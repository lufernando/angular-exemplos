import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../model/pessoa.model';
import { PessoaService } from '../../service/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-pessoa-form',
  templateUrl: './tipo-pessoa-form.component.html',
  styleUrls: ['./tipo-pessoa-form.component.css']
})
export class TipoPessoaFormComponent implements OnInit {

  pessoa: Pessoa;
  cpfAlterar: string;

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    if (this.cpfAlterar){
      this.buscarCpf();
    }
  }
  buscarCpf() {
    this.service.buscarPorCpf(this.cpfAlterar).subscribe(pessoa => this.pessoa = pessoa);
  }

  inserir():void {
    if(this.pessoa.cpf){
      this.service.alterarPessoa(this.pessoa).subscribe(() => {this.pessoa = new Pessoa()
      this.router.navigateByUrl('tipo-pessoa/listar', {skipLocationChange: false});
      });
    }else {
    this.service.inserirBanco(this.pessoa).subscribe(() => {this.pessoa = new Pessoa()
    this.router.navigateByUrl('tipo-pessoa/listar', {skipLocationChange: false});
    });
    }
  }

}
