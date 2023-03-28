import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../service/coins.service';


 interface Coins {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
}

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  Data: Coins[] = [];
  filtercoins: Coins[] = [];
  Titles: string[] = [
    '#',
    'Crypto',
    'simbolo',
    'precio',
  ];

  busquedaText = '';

  constructor(private service: CoinsService) {}

  busquedaCoins() {
   this.filtercoins = this.Data.filter((service ) => 
    service.name.toLowerCase().includes(this.busquedaText.toLowerCase()) ||
    service.symbol.toLowerCase().includes(this.busquedaText.toLowerCase())
  ) 
 }

  ngOnInit(): void {
    this.service.getAllCoins().subscribe( res => {
      this.Data = res;
      this.filtercoins = res;
      console.log(this.Data)
      
    });
  }

}
