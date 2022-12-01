import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DiretorioService {

  private URL = `${environment.base_url_gerdocument}/api/v1/diretorio`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public recuperarDiretoriosRaiz() : Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL.concat("/raiz"));
  }

  public recuperarSubdiretorios(codigoDiretorio: string) : Observable<any[]> {
    return this.httpClient.get<any[]>(this.URL.concat(`/subdiretorio/${codigoDiretorio}`));
  }

  public recuperarDiretorioPrimeiroNivel() : Observable<any> {
    return this.httpClient.get<any>(this.URL.concat(`/primeiro-nivel`));
  }

  public recuperarDiretorioSegundoNivel(codigoDiretorio: string) : Observable<any> {
    return this.httpClient.get<any>(this.URL.concat(`/segundo-nivel/${codigoDiretorio}`));
  }

}
