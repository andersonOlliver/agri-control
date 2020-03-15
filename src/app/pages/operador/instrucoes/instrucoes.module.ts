import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrucoesPageRoutingModule } from './instrucoes-routing.module';

import { InstrucoesPage } from './instrucoes.page';
import { PrimeiroPassoComponent } from './primeiro-passo/primeiro-passo.component';
import { SegundoPassoComponent } from './segundo-passo/segundo-passo.component';
import { TerceiroPassoComponent } from './terceiro-passo/terceiro-passo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    IonicModule,
    InstrucoesPageRoutingModule
  ],
  declarations: [InstrucoesPage, PrimeiroPassoComponent, SegundoPassoComponent, TerceiroPassoComponent]
})
export class InstrucoesPageModule {}
