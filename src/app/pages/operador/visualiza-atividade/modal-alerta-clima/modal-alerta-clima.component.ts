import { Component, OnInit } from '@angular/core';
import { PopoverService } from '../../../../services/popover.service';

@Component({
  selector: 'app-modal-alerta-clima',
  templateUrl: './modal-alerta-clima.component.html',
  styleUrls: ['./modal-alerta-clima.component.scss'],
})
export class ModalAlertaClimaComponent implements OnInit {

  constructor(private popoverService: PopoverService) { }

  ngOnInit() {}

  fechar() {
    this.popoverService.fechar();
  }
}
