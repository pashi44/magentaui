import { Component } from '@angular/core';

@Component({
  selector: 'viewchild-header',
  imports: [],
  templateUrl: './headercomp.component.html',
  styleUrl: './headercomp.component.css'
})
export class HeadercompComponent {

header : string  =     (Math.random()  * 11).toString();


}
