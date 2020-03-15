import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-tarefa-executando',
    templateUrl: './tarefa-executando.page.html',
    styleUrls: ['./tarefa-executando.page.scss'],
})
export class TarefaExecutandoPage implements OnInit {

    horaAtual: string;
    tick;

    constructor() {
    }

    ngOnInit() {

        this.tick = setInterval(() => {
            this.horaAtual = moment().format('HH:mm:ss');
        }, 1000);
    }

    parar() {
        console.log(this.tick);
        localStorage.setItem('timer', this.horaAtual);
        clearInterval(this.tick);
    }

    interromper() {
    }
}
