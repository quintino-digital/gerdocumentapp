import { DiretorioService } from 'src/app/service/diretorio.service';
import { DiretorioCreatePage } from './../diretorio-create/diretorio-create.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretorio-menu',
  templateUrl: './diretorio-menu.page.html',
  styleUrls: ['./diretorio-menu.page.scss'],
})
export class DiretorioMenuPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private diretorioService: DiretorioService
  ) { }

  ngOnInit() { }

  public async criarNovoDiretorio() {
    console.log("criarNovoDiretorio");
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: DiretorioCreatePage,
      initialBreakpoint: 0.6,
      cssClass: "modal-create"
    });
    modal.present();
  }

}
