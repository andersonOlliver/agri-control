import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-tarefa-executando',
  templateUrl: './tarefa-executando.page.html',
  styleUrls: ['./tarefa-executando.page.scss'],
})
export class TarefaExecutandoPage implements OnInit {

  horaAtual = '00:00:00';
  tick;
  hoje = Date.now();
  iniciado = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const inicio = localStorage.getItem('inicio');
    if (inicio) {
      this.horaAtual = inicio;
    }
    this.playPause();
  }

  parar() {
    console.log(this.tick);
    localStorage.setItem('timer', this.horaAtual);
    clearInterval(this.tick);
    this.tick = null;
    this.horaAtual = '00:00:00';
  }

  playPause() {
    if (!this.tick) {
      this.tick = setInterval(() => {
        console.log(this.horaAtual);
        let segundos = moment.duration(this.horaAtual).asSeconds(); // , 'HH:mm:ss');
        segundos++;
        this.horaAtual = moment().startOf('day').seconds(segundos).format('HH:mm:ss');
        console.log(this.horaAtual);
        this.iniciado = true;
      }, 1000);
    } else {
      clearInterval(this.tick);
      this.tick = null;
    }

  }

  finalizar() {
    console.warn('Falta implementar');
    this.parar();
    this.router.navigateByUrl('/operador');
  }
}
