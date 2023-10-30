import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/';
  private key = '9908614f5a2df0e9e643eb31';

  constructor(private http: HttpClient) { }

  getSupportedCurrencies(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.key}/latest/BRL`);
  }

    MoedasNomes(): Observable<any> {
      return this.http.get(`${this.apiUrl}${this.key}/codes`);
  }

  converterMoeda(valor: number, moedaOrigem: string, novaMoeda: string): Observable<any> {
    const params = {
      from: moedaOrigem,
      to: novaMoeda,
      amount: valor.toString()
    };

    return this.http.get(`${this.apiUrl}convert`, { params });
  }

  getListaDeMoedas(): Observable<any> {
    return this.http.get(`${this.apiUrl}${this.key}/currencies`);
  }

  getExchangeRate(base: string, target: string, amount?: number): Observable<any> {
    let url = `${this.apiUrl}${this.key}/pair/${base}/${target}`;
    if (amount) {
      url += `/${amount}`;
    }
    return this.http.get(url);
  }

}
