import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';

import { VisualizaAtividadePageRoutingModule } from './visualiza-atividade-routing.module';

import { VisualizaAtividadePage } from './visualiza-atividade.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VisualizaAtividadePageRoutingModule,
    ],
    declarations: [VisualizaAtividadePage],
    entryComponents: []
})
export class VisualizaAtividadePageModule {
}
