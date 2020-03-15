import { Component, OnInit } from '@angular/core';
import { PopoverService } from '../../../../services/popover.service';

@Component({
    selector: 'app-modal-confirmacao',
    templateUrl: './modal-confirmacao.component.html',
    styleUrls: ['./modal-confirmacao.component.scss'],
})
export class ModalConfirmacaoComponent implements OnInit {

    constructor(private popoverService: PopoverService) {
    }

    ngOnInit() {
    }

    async fechar() {
        await this.popoverService.fechar();
    }
}
