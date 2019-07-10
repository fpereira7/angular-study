import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaCadastroComponent } from 'app/pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasPesquisaComponent } from 'app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoasGridComponent } from 'app/pessoas/pessoas-grid/pessoas-grid.component';

import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    SelectButtonModule,
    InputMaskModule
  ],
  declarations: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent,
    PessoasGridComponent
  ],
  exports: [
    PessoaCadastroComponent,
    PessoasPesquisaComponent
  ]
})
export class PessoasModule { }
