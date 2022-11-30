import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiretorioService } from 'src/app/service/diretorio.service';
import { ArquivoService } from './../../service/arquivo.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  public codigoDiretorio: any;

  public diretorioSecundarioList: any = [];

  public arquivoDomainList: any = [];

  public isApresentarAquivos: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private diretorioService: DiretorioService,
    private arquivoService: ArquivoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.codigoDiretorio = this.activatedRoute.snapshot.paramMap.get("codigoDiretorio");
    this.recuperarDiretorioSegundoNivel(this.codigoDiretorio);
  }

  public recuperarDiretorioSegundoNivel(codigoDiretorio: string) {
    this.diretorioService.recuperarDiretorioSegundoNivel(codigoDiretorio).subscribe(response => {
      this.diretorioSecundarioList = response;
      if(this.diretorioSecundarioList.length === 0) {
        this.isApresentarAquivos = true;
        this.arquivoService.recuperarArquivoDiretorio(codigoDiretorio).subscribe( response => {
          this.arquivoDomainList = response;
        });
      }
    });
  }

  public redirecionarPaginaAnterior() {
    window.history.back();
  }

}
