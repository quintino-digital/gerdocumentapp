import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DiretorioService } from 'src/app/service/diretorio.service';
import { DiretorioMenuPage } from './../../modal/diretorio-menu/diretorio-menu.page';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  public icone: string = "grid-outline";

  public diretorioRaizList: any = [];

  public diretorioSubpastasList: any = [];

  public diretorioDTOList: any = [];

  public diretorioDTO: any;

  constructor(
    private diretorioService: DiretorioService,
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // this.recuperarDiretoriosRaiz();
    this.recuperarDiretorioPrimeiroNivel();
  }

  public alterarFormaApresentacaoPastas() {
    if(this.icone != "list-outline") {
      this.icone = "list-outline";
    } else {
      this.icone = "grid-outline";
    }
  }

  public recuperarDiretorioPrimeiroNivel() {
    this.diretorioDTOList = [];
    return this.diretorioService.recuperarDiretorioPrimeiroNivel().subscribe(response => {
      this.diretorioDTOList = response;
    });
  }

  public navegarSubpasta(codigoDiretorio: string) {
    this.router.navigateByUrl(`/detalhe/${codigoDiretorio}`);
  }

  public async criarDiretorio() {
    const modal = await this.modalController.create({
      component: DiretorioMenuPage,
      initialBreakpoint: 0.6
    });
    modal.present();
  }

  private recarregarTela() {
    window.location.reload();
  }

}
