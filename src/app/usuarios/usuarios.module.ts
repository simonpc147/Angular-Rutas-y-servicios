import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasUsuariosModule } from './rutas-usuarios.module';

import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    IngresoComponent,
    EgresoComponent,
 
  ],
  imports: [
    CommonModule,
    RutasUsuariosModule,
    FormsModule,
    RouterModule
    
  ]
})
export class UsuariosModule { }
