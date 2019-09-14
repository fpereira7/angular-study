import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PessoaService } from 'app/pessoas/pessoa.service';
import { Pessoa } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    const codigoPessoa = this.route.snapshot.params['codigo'];
    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
  }

  salvar(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa)
    .then(() => {

      if (this.pessoa.codigo) {
        this.toasty.success('Pessoa editada com sucesso!');
      }else {
        this.toasty.success('Pessoa adicionada com sucesso!');
      }

      form.reset();
      this.pessoa = new Pessoa();
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  carregarPessoa(codigo: number) {
    this.pessoaService.buscarPorCodigo(codigo)
    .then(pessoa => {
      this.pessoa = pessoa;
     // this.atualizarTituloEdicao();
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.pessoa.codigo);
  }

}
