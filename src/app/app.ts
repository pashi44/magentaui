import { Component, signal , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zomato } from './zomato/zomato';

@Component({
  selector: 'magenta-root',               
  standalone  : true,
  imports: [RouterOutlet, Zomato],      
  templateUrl: './app.html',
  styleUrls: ['./app.css']               
})
export class App implements  OnInit {
  readonly title = signal('Magenta');

  ngOnInit(): void {
      
  }

}