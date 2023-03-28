import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// Rutas principales

import { AppComponent } from './app.component';
import { ApprutasModule } from './apprutas.module';
import { BaloncestoComponent } from './baloncesto/baloncesto.component';
import { FutbolComponent } from "./futbol/futbolComponent";
import { FormsModule } from '@angular/forms';
import { BalanceComponent } from './balance/balance.component';


@NgModule({
  declarations: [
    AppComponent,
    FutbolComponent,
    BaloncestoComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApprutasModule,
    HttpClientModule
  ],
  exports: [
    FutbolComponent,
    BaloncestoComponent,
    BalanceComponent,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
