import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../usuarios/ingreso/interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private capital_url ="https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  buscarCapital( termino: string): Observable<Country[]> {
    
    const url = `${this.capital_url}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
}
