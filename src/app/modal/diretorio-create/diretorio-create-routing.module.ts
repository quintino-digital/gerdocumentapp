import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiretorioCreatePage } from './diretorio-create.page';

const routes: Routes = [
  {
    path: '',
    component: DiretorioCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiretorioCreatePageRoutingModule {}
