import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarefaExecutandoPageRoutingModule } from './tarefa-executando-routing.module';

import { TarefaExecutandoPage } from './tarefa-executando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarefaExecutandoPageRoutingModule
  ],
  declarations: [TarefaExecutandoPage]
})
export class TarefaExecutandoPageModule {}
