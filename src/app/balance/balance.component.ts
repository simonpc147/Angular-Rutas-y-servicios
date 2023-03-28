import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../usuarios/ingreso/interfaces/pais.interface';
import { PaisService } from '../service/pais.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit{

  pais!: Country ;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService
    ) {}

  ngOnInit(): void {
    
    this.activatedRoute.params
    .subscribe( params =>{
      console.log( params['id']);

         this.paisService.getPaisporCodigo(params['id'])
         .subscribe( pais => {
           console.log(pais);

          this.pais = pais[0];

         })
    })
  } 
}
