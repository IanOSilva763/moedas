  import { AfterViewInit, Component, ViewChild } from '@angular/core';
  import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
  import {MatSort, MatSortModule} from '@angular/material/sort';
  import {MatTableDataSource, MatTableModule} from '@angular/material/table';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';

  export interface UserData {
    id: string;
    item: string;
    quantidade: string;
    cor: string;
  }
  

  const CORES: string[] = [
    'preto',
    'roxo',
    'vermelho',
    'azul',
    'rosa',
    'verde',
    'amarelo',
  ];
  const ITENS: string[] = [
    'Lápis de cor',
    'Caneta',
    'Mochila',
    'Post-it',
    'Clips',
    'Garrafa',
    'Estojo',
    'Caderno',
    'Apontador',
    'Régua',
    'Tesoura',
    'Calculadora',
    'Corretivo',
    'Cola',
    'Agenda',
    'Pasta',
    'Adesivo',
    'Carimbo',
    'livro',
    'lapiseira',
    'borracha',
    'compasso',
    'esquadro',
    'lancheira',
  ];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule]
})
export class ListComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'item', 'quantidade', 'cor'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {

    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));


    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


function createNewUser(id: number): UserData {
  const item =
    ITENS[Math.round(Math.random() * (ITENS.length - 1))] +
    ' ' 

  return {
    id: id.toString(),
    item: item,
    quantidade: Math.round(Math.random() * 15).toString(),
    cor: CORES[Math.round(Math.random() * (CORES.length - 1))],
  };
}