import { Component } from '@angular/core';

import { Country } from '../ingreso/interfaces/pais.interface';
import { CapitalService } from '../../service/capital.service';

 @Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent {

  termino : string = "";
  hayError: boolean = false;
  capitales : Country[] = [];

  constructor (private CapitalService:CapitalService) {}

    buscar() {
      this.hayError = false;
      console.log(this.termino);

      this.CapitalService.buscarCapital(this.termino)
      .subscribe(capitales => {
        console.log(capitales);
        this.capitales = capitales;
      }, (error) =>{
        this.hayError  = true;
        this.capitales = []
      }
      )
    }
  

}
