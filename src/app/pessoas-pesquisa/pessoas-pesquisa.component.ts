import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {

  pessoas = [
    {nome: 'Manoel Pinheiro', cidade: 'Uberlandia', estado: 'MG', ativo: true },
    {nome: 'Sebastião da Silva', cidade: 'Sao Paulo', estado: 'SP', ativo: false},
    {nome: 'Carla Souza', cidade: 'Floarianopolis', estado: 'SC', ativo: true},
    {nome: 'Luis Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true},
    {nome: 'Vilmar Andrade', cidade: 'Rio de janeiro', estado: 'RJ', ativo: false},
    {nome: 'Petcheco da Silva', cidade: 'Ceara', estado: 'CE', ativo: false},
    {nome: 'Forrage do ceará', cidade: 'Paraiba', estado: 'PB', ativo: false},

  ];


}
