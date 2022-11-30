import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiretorioCreatePageRoutingModule } from './diretorio-create-routing.module';

import { DiretorioCreatePage } from './diretorio-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiretorioCreatePageRoutingModule
  ],
  declarations: [DiretorioCreatePage]
})
export class DiretorioCreatePageModule {}
