import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Moedas } from '../Model/Moedas';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'https://v6.exchangerate-api.com/v6/';
  private key = '9908614f5a2df0e9e643eb31';

  constructor(private http: HttpClient) { }
    MoedasNomes(): Observable<any> {
      return this.http.get(`${this.apiUrl}${this.key}/codes`);
  }

//  $.ajax({
//    url: 'https://api.exchangerate.host/' + endpoint + '?access_key=' + access_key,   
//    dataType: 'jsonp',
//    success: function(json) {
}