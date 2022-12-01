import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  private URL = `${environment.base_url_gerdocument}/api/v1/arquivo`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public recuperarArquivoDiretorio(codigoDiretorio: string) : Observable<any> {
    return this.httpClient.get<any>(this.URL.concat(`/diretorio/${codigoDiretorio}`));
  }

}
