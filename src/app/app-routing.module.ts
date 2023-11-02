import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ListComponent } from './list/list.component';
import { ConverterComponent } from './converter/converter.component';

const routes: Routes = [
  { path: "", redirectTo: 'inicial', pathMatch: 'full' },
  { path: "inicial", component: PrincipalComponent},
  { path: "list", component: ListComponent},
  { path: "converter", component: ConverterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
