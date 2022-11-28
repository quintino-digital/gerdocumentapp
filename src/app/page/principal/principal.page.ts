import { Component, OnInit } from '@angular/core';
import { DiretorioService } from 'src/app/service/diretorio.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  public icone: string = "grid-outline";

  public diretorioRaizList: any = [];

  public diretorioSubpastasList: any = [];

  constructor(
    private diretorioService: DiretorioService
  ) { }

  ngOnInit() { 
    this.recuperarDiretoriosRaiz();
  }

  public alterarFormaApresentacaoPastas() {
    if(this.icone != "list-outline") {
      this.icone = "list-outline";
    } else {
      this.icone = "grid-outline";
    }
  }

  public recuperarDiretoriosRaiz() {
    return this.diretorioService.recuperarDiretoriosRaiz().subscribe( response => {
      this.diretorioRaizList = response;
      for(let index in this.diretorioRaizList) {
        this.recuperarNumeroPastas(this.diretorioRaizList[index].codigo);
      }
    });
  }

  public recuperarNumeroPastas(codigoDiretorio: string) {
    this.diretorioService.recuperarSubdiretorios(codigoDiretorio).subscribe( response => {
      this.diretorioSubpastasList = response;
    });
  }

}
