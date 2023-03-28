import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../usuarios/ingreso/interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private pais_url: string = "https://restcountries.com/v3.1"

  constructor( private http: HttpClient) { }

  buscarpais( termino: string ): Observable<Country[]>{
    
    const url = `${this.pais_url}/name/${ termino }`
    return this.http.get<Country[]>( url )
  }

  getPaisporCodigo( id: string ): Observable<Country[]>{
    const url = `${this.pais_url}/alpha/${ id }`;
    return this.http.get<Country[]>( url );
  }
  
}
