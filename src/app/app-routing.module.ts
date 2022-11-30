import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conexao',
    pathMatch: 'full'
  },
  {
    path: 'conexao',
    loadChildren: () => import('./page/conexao/conexao.module').then( m => m.ConexaoPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./page/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'detalhe/:codigoDiretorio',
    loadChildren: () => import('./page/detalhe/detalhe.module').then( m => m.DetalhePageModule)
  },
  {
    path: 'diretorio-menu',
    loadChildren: () => import('./modal/diretorio-menu/diretorio-menu.module').then( m => m.DiretorioMenuPageModule)
  },
  {
    path: 'diretorio-create',
    loadChildren: () => import('./modal/diretorio-create/diretorio-create.module').then( m => m.DiretorioCreatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
