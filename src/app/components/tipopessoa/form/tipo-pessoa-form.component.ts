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
  pessoas: Array<Pessoa>

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit() {
    this.pessoa = new Pessoa;
    this.pessoas = new Array();
  }

  inserir():void {
    this.service.inserirBanco(this.pessoa).subscribe();
    this.router.navigateByUrl('tipo-pessoa/listar');
  }

}
