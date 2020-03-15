import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrucoes',
  templateUrl: './instrucoes.page.html',
  styleUrls: ['./instrucoes.page.scss'],
})
export class InstrucoesPage implements OnInit {

  tela = 1;

  constructor() {
  }

  ngOnInit() {
    const agora = new Date();

    localStorage.setItem('inicio', JSON.stringify(agora));
  }

  mudarTela(tela: number) {
    this.tela = tela;
  }
}
