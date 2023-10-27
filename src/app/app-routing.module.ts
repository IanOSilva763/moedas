import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListComponent } from './list/list.component';
import { ConverterComponent } from './converter/converter.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  { path: "", redirectTo: 'inicial', pathMatch: 'full' },
  { path: "inicial", component: PrincipalComponent},
  { path: "list", component: ListComponent},
  { path: "converter", component: ConverterComponent},
  { path: "historico", component: HistoricoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
