import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';

@Injectable({
    providedIn: 'root'
})
export class DadosMeteorologicoService {

    constructor(private database: AngularFireDatabase) {
    }

    obterInformacaoDoTalhao() {
      return this.database.object('chuva').valueChanges();
    }
}
