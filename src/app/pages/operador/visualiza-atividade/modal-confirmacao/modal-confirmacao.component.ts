import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverService } from '../../../../services/popover.service';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss'],
})
export class ModalConfirmacaoComponent implements OnInit {

  constructor(private popoverService: PopoverService, private router: Router) {
  }

  ngOnInit() {
  }

  async fechar() {
    await this.popoverService.fechar();
  }

  async iniciar() {
    await this.fechar();
    await this.router.navigateByUrl('/tarefa');
  }

  async instrucoes() {
    await this.fechar();
    await this.router.navigateByUrl('/instrucoes');
  }
}
