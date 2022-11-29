import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conexao',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./page/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'conexao',
    loadChildren: () => import('./page/conexao/conexao.module').then( m => m.ConexaoPageModule)
  },
  {
    path: 'detalhe/:codigoDiretorio',
    loadChildren: () => import('./page/detalhe/detalhe.module').then( m => m.DetalhePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
