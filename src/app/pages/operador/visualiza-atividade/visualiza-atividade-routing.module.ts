import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizaAtividadePage } from './visualiza-atividade.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizaAtividadePage
  },
  {
    path: ':id',
    component: VisualizaAtividadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizaAtividadePageRoutingModule {}
