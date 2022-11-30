import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiretorioMenuPageRoutingModule } from './diretorio-menu-routing.module';

import { DiretorioMenuPage } from './diretorio-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiretorioMenuPageRoutingModule
  ],
  declarations: [DiretorioMenuPage]
})
export class DiretorioMenuPageModule {}
