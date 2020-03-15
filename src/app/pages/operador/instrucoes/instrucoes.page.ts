import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperadorService } from '../../../services/operador.service';

@Component({
  selector: 'app-instrucoes',
  templateUrl: './instrucoes.page.html',
  styleUrls: ['./instrucoes.page.scss'],
})
export class InstrucoesPage implements OnInit {

  tela = 1;
  atividade: any;

  constructor(private activedRoute: ActivatedRoute,
              private operadorService: OperadorService) {
  }

  ngOnInit() {
    const agora = new Date();
    this.buscarAtividade();
    localStorage.setItem('inicio', JSON.stringify(agora));
  }


  private buscarAtividade() {
    this.activedRoute.params.subscribe(x => {
      console.log(x);
      this.operadorService.obterAtividade(x.id)
        .subscribe(xa => {
          console.log(xa);
          this.atividade = xa;
        });
    });
  }


  mudarTela(tela: number) {
    this.tela = tela;
  }
}
