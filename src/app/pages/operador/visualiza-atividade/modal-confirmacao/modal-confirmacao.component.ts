import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PopoverService } from '../../../../services/popover.service';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss'],
})
export class ModalConfirmacaoComponent implements OnInit {
  private params: Params;

  constructor(private activatedRoute: ActivatedRoute, private popoverService: PopoverService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(x => this.params = x);
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
