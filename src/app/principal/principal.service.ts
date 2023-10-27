import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ListarMoedas } from 'src/app/Model/ListarMoedas'

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }
  getHeaders() {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + environment.apiKey
      })
    };
  }
    listarFilmesFavoritos(): Observable<ListarMoedas> {
    const options = this.getHeaders();
    return this.http.get<ListarMoedas>("https://api.exchangerate.host/list", options);
  }
}



