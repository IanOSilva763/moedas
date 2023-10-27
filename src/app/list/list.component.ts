  import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
  import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
  import {MatSort, MatSortModule} from '@angular/material/sort';
  import {MatTableDataSource, MatTableModule} from '@angular/material/table';
  import {MatInputModule} from '@angular/material/input';
  import {MatFormFieldModule} from '@angular/material/form-field';
import { Moedas } from '../Model/Moedas';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule]
})
export class ListComponent implements OnInit{  
  displayedColumns: string[] = ['symbol','name'];
  dataSource: MatTableDataSource<Moedas> = new MatTableDataSource<Moedas>([]);
  pageSize: number = 10;

  @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  constructor(private listService: ListService) {
    this.dataSource = new MatTableDataSource<Moedas>([]);
  }

  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }

    this.listService.MoedasNomes().subscribe(
      (response) => {
        if (response.result === 'success' && response.supported_codes) {
          const currenciesArray: IListCurrencies[] = response.supported_codes.map((currency: any) => {
            return {
              symbol: currency[0],
              name: currency[1]
            };
          });
          this.dataSource.data = currenciesArray;
        }
      },
      (error) => {
        console.error('Erro na solicitação:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}