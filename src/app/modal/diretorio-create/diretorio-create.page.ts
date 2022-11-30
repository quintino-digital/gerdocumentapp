import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretorio-create',
  templateUrl: './diretorio-create.page.html',
  styleUrls: ['./diretorio-create.page.scss'],
})
export class DiretorioCreatePage implements OnInit {

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() { }

  public async cadastrarDiretorio() {
    console.log("cadastrarDiretorio...");
    this.fecharModal();
  }

  public async fecharModal() {
    this.modalController.dismiss();
  }

}
