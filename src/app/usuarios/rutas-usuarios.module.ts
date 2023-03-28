import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresoComponent } from './egreso/egreso.component';


  const rutas : Routes = [
    {
      path: '',
      children: [
        { path: 'ingreso', component: IngresoComponent},
        { path: 'egreso', component: EgresoComponent},
      ]
    }
  ]


@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ]
})
export class RutasUsuariosModule { }
