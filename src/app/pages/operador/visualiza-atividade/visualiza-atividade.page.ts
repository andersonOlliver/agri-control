import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { DadosMeteorologicoService } from '../../../services/dados-meteorologico.service';
import { OperadorService } from '../../../services/operador.service';
import { PopoverService } from '../../../services/popover.service';
import { ModalAlertaClimaComponent } from './modal-alerta-clima/modal-alerta-clima.component';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-visualiza-atividade',
  templateUrl: './visualiza-atividade.page.html',
  styleUrls: ['./visualiza-atividade.page.scss'],
})
export class VisualizaAtividadePage implements OnInit, OnDestroy {
  private atividade: any;

  constructor(private activedRoute: ActivatedRoute,
              private dadosMeteorologicoService: DadosMeteorologicoService,
              private operadorService: OperadorService,
              private popoverService: PopoverService) {
  }

  ngOnInit() {
    this.verificarDadosTalhao();
    this.buscarAtividade();
  }

  ngOnDestroy(): void {
    localStorage.removeItem('tarefa');
  }

  private buscarAtividade() {
    this.activedRoute.params.subscribe(x => {
      console.log(x);
      this.operadorService.obterAtividade(x.id)
        .subscribe(xa => {
          console.log(xa);
          this.atividade = xa;
          localStorage.setItem('tarefa', JSON.stringify(this.atividade));
        });
    });

  }

  private verificarDadosTalhao() {
    this.dadosMeteorologicoService.obterInformacaoDoTalhao()
      .pipe(first()).subscribe(async x => {
      if (x === 1) {
        await this.popoverService.abrir(ModalAlertaClimaComponent);
      }
    });
  }

  async iniciar() {
    await this.popoverService.abrir(ModalConfirmacaoComponent);
    // this.dadosMeteorologicoService.obterInformacaoDoTalhao()
    //     .pipe(first()).subscribe(async x => {
    //     if (x === 1) {
    //     }
    // });
  }

}
