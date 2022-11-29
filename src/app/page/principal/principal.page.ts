import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  public diretorioDTOList: any = [];

  public diretorioDTO: any;

  constructor(
    private diretorioService: DiretorioService,
    private router: Router
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
    return this.diretorioService.recuperarDiretorioPrimeiroNivel().subscribe(response => {
      this.diretorioDTOList = response;
    });
  }

  public navegarSubpasta(codigoDiretorio: string) {
    this.router.navigateByUrl(`/detalhe/${codigoDiretorio}`);
  }

}
