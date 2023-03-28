import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/service/pais.service';

import { Country } from './interfaces/pais.interface';



@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor ( private service: PaisService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino)



    this.service.buscarpais(this.termino)
    .subscribe( ( paises) => { 
      console.log(paises);
      this.paises = paises;

    }, (error) => {
      this.hayError = true;
      this.paises = [];
    });
  }

 

}
