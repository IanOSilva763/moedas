  import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
  import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
  import {MatSort, MatSortModule} from '@angular/material/sort';
  import {MatTableDataSource, MatTableModule } from '@angular/material/table';
  import { Moedas } from '../Model/Moedas';
import { PrincipalService } from '../principal/principal.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{  
  displayedColumns: string[] = ['symbol','name'];
  dataSource: MatTableDataSource<Moedas> = new MatTableDataSource<Moedas>([]);
  pageSize: number = 10;

  @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;

  constructor(private principalService: PrincipalService) {
    this.dataSource = new MatTableDataSource<Moedas>([]);
  }

  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }

    this.principalService.MoedasNomes().subscribe(
      (response) => {
        if (response.result === 'success' && response.supported_codes) {
          const moedasArray: Moedas[] = response.supported_codes.map((moeda: any) => {
            return {
              symbol: moeda[0],
              name: moeda[1]
            };
          });
          this.dataSource.data = moedasArray;
        }
      },
      (error) => {
        console.error('Falha na solicitação:', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}