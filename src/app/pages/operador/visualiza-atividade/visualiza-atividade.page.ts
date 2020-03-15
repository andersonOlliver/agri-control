import { Component, OnInit } from '@angular/core';
import { DadosMeteorologicoService } from '../../../services/dados-meteorologico.service';
import { PopoverService } from '../../../services/popover.service';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';

@Component({
    selector: 'app-visualiza-atividade',
    templateUrl: './visualiza-atividade.page.html',
    styleUrls: ['./visualiza-atividade.page.scss'],
})
export class VisualizaAtividadePage implements OnInit {

    constructor(private dadosMeteorologicoService: DadosMeteorologicoService, private popoverService: PopoverService) {
    }

    ngOnInit() {
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
