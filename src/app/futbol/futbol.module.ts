import { CommonModule } from '@angular/common';
import { FutbolComponent } from "./futbolComponent";
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    FutbolComponent,

     
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FutbolComponent
    
  ]
})
export class FutbolModule { }
