import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  private URL = "http://127.0.0.1:8082/api/v1/arquivo";

  constructor(
    private httpClient: HttpClient
  ) { }

  public recuperarArquivoDiretorio(codigoDiretorio: string) : Observable<any> {
    return this.httpClient.get<any>(this.URL.concat(`/diretorio/${codigoDiretorio}`));
  }

}
