import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiretorioService } from 'src/app/service/diretorio.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {

  public codigoDiretorio: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private diretorioService: DiretorioService
  ) { }

  ngOnInit() {
    this.codigoDiretorio = this.activatedRoute.snapshot.paramMap.get("codigoDiretorio");
  }



}
