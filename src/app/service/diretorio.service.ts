import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorioService {

  private URL = "http://127.0.0.1:8082/api/v1/diretorio";

  constructor(
    private httpClient: HttpClient
  ) { }

  public recuperarDiretoriosRaiz() : Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL.concat("/raiz"));
  }

  public recuperarSubdiretorios(codigoDiretorio: string) : Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL.concat(`/subdiretorio/${codigoDiretorio}`));
  }

}
