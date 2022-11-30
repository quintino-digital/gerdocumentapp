import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conexao',
  templateUrl: './conexao.page.html',
  styleUrls: ['./conexao.page.scss'],
})
export class ConexaoPage implements OnInit {

  public progress = 0;

  constructor(
    private router: Router
  ) {
    this.calcularProgresso();
  }

  ngOnInit() { }

  public calcularProgresso() {
    setInterval(() => {
      this.progress += 0.01;
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 100);
      }
    }, 30);
    this.redirecionarPaginaPrincipal();
  }

  public redirecionarPaginaPrincipal() {
    setTimeout(() => {
      this.router.navigateByUrl("/principal");
    }, 2000);
  }

}
