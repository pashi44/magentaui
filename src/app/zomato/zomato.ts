import Izomato from "./Izomato"
import { Component } from '@angular/core';

import { NgIf } from "@angular/common";


@Component({
  selector: 'magenta-zomato',
  standalone  :  true,
  templateUrl: './zomato.html',
  styleUrls: ['./zomato.css'],
  imports: [NgIf]
})
export class Zomato {
  MyName   :  string= 'prashanth';
zomatoObject  :  Izomato  =  {
 
C0 :  0,
};

toggle() : void  {
 alert("just checking the event binding");
};



}