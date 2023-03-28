import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FutbolComponent } from "./futbol/futbolComponent";
import { BaloncestoComponent } from './baloncesto/baloncesto.component';
import { BalanceComponent } from './balance/balance.component';

  const rutas : Routes = [
    {
      path: 'usuarios',
      loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)
    },
    {
      path: 'futbol',
      component : FutbolComponent
    },
    {
      path: 'baloncesto',
      component: BaloncestoComponent 
    },
    {
      path: 'balancee/:id',
      component: BalanceComponent
    },
    {
    path: '**',
    redirectTo: 'usuarios'
    }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class ApprutasModule { }
