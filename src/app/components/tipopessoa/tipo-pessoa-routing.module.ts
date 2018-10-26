import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoPessoaListComponent } from './list/tipo-pessoa-list.component';
import { TipoPessoaFormComponent } from './form/tipo-pessoa-form.component';

const routes: Routes = [
  {path: 'listar', component: TipoPessoaListComponent},
  {path: 'form', component: TipoPessoaFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TipoPessoaRoutingModule { }
