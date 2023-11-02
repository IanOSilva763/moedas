import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  constructor() {}

  adicionarConversao(moedaOrigem: string, novaMoeda: string, valor: number, novoValor: number, taxaConversao: number) {
    const conversao = {
      moedaOrigem,
      novaMoeda,
      valor,
      novoValor,
      taxaConversao,
      data: new Date()
    };

    let historicoConversoes = this.getHistoricoConversoes();
    historicoConversoes.push(conversao);
    this.salvarHistoricoConversoes(historicoConversoes);
  }

  getHistoricoConversoes() {
    const historico = localStorage.getItem('historicoConversoes');
    return historico ? JSON.parse(historico) : [];
  }

  salvarHistoricoConversoes(historicoConversoes: any[]) {
    localStorage.setItem('historicoConversoes', JSON.stringify(historicoConversoes));
  }
}
