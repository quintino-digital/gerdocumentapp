import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretorioMenuPage } from './diretorio-menu.page';

const routes: Routes = [
  {
    path: '',
    component: DiretorioMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiretorioMenuPageRoutingModule {}
