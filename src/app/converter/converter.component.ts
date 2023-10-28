import { Component } from '@angular/core';
import { PrincipalService } from '../principal/principal.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  moedas: any[] = []; // Deve ser um array de objetos com propriedades 'name' e 'symbol'
  moedaOrigem: string = '';
  novaMoeda: string = '';
  valor: number = 0;
  novoValor: number = 0;
  taxaConversao: number = 0;

  constructor(private principalService: PrincipalService) {}

  converterMoeda() {
    if (this.moedaOrigem && this.novaMoeda && this.valor) {
      this.principalService.getExchangeRate(this.moedaOrigem, this.novaMoeda, this.valor).subscribe(
        (response: any) => {
          if (response.result === 'success' && response.conversion_rate) {
            this.novoValor = response.conversion_result;
            this.taxaConversao = response.conversion_rate;
          }
        },
        (error: any) => {
          console.error('Erro ao converter:', error);
        }
      );
    } else {
      console.error('preencha todos as informações.');
    }
  }

  ngOnInit() {
    this.principalService.MoedasNomes().subscribe(
      (response: any) => {
        if (response.result === 'success' && response.supported_codes) {
          this.moedas = response.supported_codes.map((currency: any) => {
            return {
              name: currency[1],
              symbol: currency[0]
            };
          });
        }
      },
      (error: any) => {
        console.error('Erro ao listar as moedas:', error);
      }
    );
  }
}

