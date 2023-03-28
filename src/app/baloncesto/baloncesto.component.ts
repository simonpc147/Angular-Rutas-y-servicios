import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../service/crypto.service';

  interface Crypto {
    name: string;
    symbol: string;
    image: string;
    current_price: number;
  }

@Component({
  selector: 'app-baloncesto',
  templateUrl: './baloncesto.component.html',
  styleUrls: ['./baloncesto.component.css']
})
export class BaloncestoComponent implements OnInit{

  crypto: Crypto[] = [];
  filterCrypto: Crypto[] = [];

  BusquedaText = '';

  constructor ( private service: CryptoService) {}

  BuscarCrypto() {
    this.filterCrypto = this.crypto.filter((service) =>
    service.name.toLowerCase().includes(this.BusquedaText.toLowerCase()) ||
    service.symbol.toLowerCase().includes(this.BusquedaText.toLowerCase())
    )
  }

  ngOnInit(): void {
    this.service.getAllCrypto().subscribe( res => {
      this.crypto = res;
      this.filterCrypto = res;
      console.log(this.crypto)
    })
  }

}
