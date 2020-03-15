import { Component, OnInit } from '@angular/core';
import { OperadorService } from '../../../services/operador.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  tarefas: any[];
  hoje = new Date();

  constructor(private operadorService: OperadorService) {
  }

  ngOnInit() {
    this.operadorService.obterAtividadesAExecutar().subscribe(x => {
      console.log(x);
      this.tarefas = x;
    });
  }

}
