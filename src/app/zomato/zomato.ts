import Izomato from "./Izomato"
import { Component, OnInit,  OnChanges,  input, output,  EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

import { NgIf , NgFor} from "@angular/common";


@Component({
  selector: 'magenta-zomato',
  standalone  :  true,
  templateUrl: './zomato.html',
  styleUrls: ['./zomato.css'],
  imports: [NgIf, NgFor],
  changeDetection  : ChangeDetectionStrategy.Default,
})
export class Zomato  implements  OnInit {
  MyName  : string = 'prashanth';

  @Input() restaurantName: string = '';

  @Output() orderPlaced = new EventEmitter<string>();

  zomatoObject  :  Izomato  =  {
 
C0 :  1296,
};

zomatoObjectList  :   Izomato[] =[];


toggle() : void  {
 alert("just checking the event binding");
     this.orderPlaced.emit(`Order placed at ${this.restaurantName}`);

};

//blockign code should go here rather than constrcutor
ngOnInit(): void {
  
this.zomatoObjectList =  [

 
    { C0: 1296, Country: 'India', Region: 'APAC' },
    { C0: 2048, Country: 'USA',   Region: 'NA'   },
    { C0:  512, Country: 'UK',    Region: 'EMEA' }



];

}


}