import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoPessoaRoutingModule } from './tipo-pessoa-routing.module';
import { TipoPessoaListComponent } from './list/tipo-pessoa-list.component';
import { TipoPessoaFormComponent } from './form/tipo-pessoa-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TipoPessoaRoutingModule,
    FormsModule
  ],
  declarations: [TipoPessoaListComponent, TipoPessoaFormComponent]
})
export class TipoPessoaModule { }
