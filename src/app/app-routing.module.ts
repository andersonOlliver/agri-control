import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'produtor',
    loadChildren: () => import('./pages/produtor/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'operador',
    loadChildren: () => import('./pages/operador/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'atividade',
    loadChildren: () => import('./pages/operador/visualiza-atividade/visualiza-atividade.module').then( m => m.VisualizaAtividadePageModule)
  },
  {
    path: 'tarefa',
    loadChildren: () => import('./pages/operador/tarefa-executando/tarefa-executando.module').then( m => m.TarefaExecutandoPageModule)
  },
  {
    path: 'operacoes',
    loadChildren: () => import('./pages/produtor/operacoes/operacoes.module').then( m => m.OperacoesPageModule)
  },
  {
    path: 'instrucoes',
    loadChildren: () => import('./pages/operador/instrucoes/instrucoes.module').then( m => m.InstrucoesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
