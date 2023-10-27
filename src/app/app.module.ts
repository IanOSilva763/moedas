import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TopoComponent } from './topo/topo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { ConverterComponent } from './converter/converter.component';
import { HistoricoComponent } from './historico/historico.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    RodapeComponent,
    TopoComponent,
    ConverterComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
