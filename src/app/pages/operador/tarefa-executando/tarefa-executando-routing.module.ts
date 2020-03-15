import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarefaExecutandoPage } from './tarefa-executando.page';

const routes: Routes = [
  {
    path: '',
    component: TarefaExecutandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefaExecutandoPageRoutingModule {}
