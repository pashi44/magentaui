//Evnet is a reserved key word   her e, Event is an  interface  , implemted byt eh ROuter and more to
//define the type of event
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import Employee, { Color } from '../../entities/Employee';
import { Room, RoomList } from '../../entities/Room';
import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { time } from 'console';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeadercompComponent } from '../headercomp/headercomp.component';
@Component({
  selector: 'my-widget',
  imports: [NgIf, NgFor, NgClass, CurrencyPipe, RoomsListComponent, HeadercompComponent],
  templateUrl: './zomato.component.html',
  styleUrls: ['./zomato.component.css'],
})



export class ZomatoComponent implements OnInit, AfterViewInit {
  emp1: Employee = new Employee('pasgu', 29, Color.Yellow);

  hideobject: boolean = true;

//true garuntes  the headercompCompoet avaliablie by ngOninit phase , uniles it has

//structura l directives or blocking code
@ViewChild(HeadercompComponent , {static  :   false}) header! : HeadercompComponent;



  set_title: string = '';
  toggle(event: Event): void {
    this.hideobject = !this.hideobject;
    this.set_title = Math.floor(Math.random() * 55).toString();
  }

  rooms: Room = { totalrooms: 30, avaliableRooms: 10, bookedRooms: 5 };
  roomlistObj: RoomList = {
    roomType: 'Single Deluxe',
    amentities: 'WiFi, AC, TV',
    price: 80,
    photos: 'single_deluxe.jpg',
    checkInTime: '14:00',
    checkOutTime: '12:00',
  };
  roomsContainer: RoomList[] = [];
  constructor() {}

  add(event: { room: RoomList; action: 'push' | 'pop' }) {
    if (event.action === 'push') {
      this.roomsContainer = [...this.roomsContainer, this.roomlistObj];
    } else if (event.action === 'pop') {
      this.roomsContainer = this.roomsContainer.slice(0, -1);
    }
  }

  ngOnInit(): void {
    this.roomsContainer = [
      {
        roomType: 'Single Deluxe',
        amentities: 'WiFi, AC, TV',
        price: 80,
        photos: 'single_deluxe.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
      {
        roomType: 'Double Deluxe',
        amentities: 'WiFi, AC, TV, Mini Fridge',
        price: 120,
        photos: 'double_deluxe.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
      {
        roomType: 'Suite',
        amentities: 'WiFi, AC, TV, Mini Bar, Balcony',
        price: 250,
        photos: 'suite.jpg',
        checkInTime: new Date().getHours().toString(),
        checkOutTime: '12:00',
      },
      {
        roomType: 'Family Room',
        amentities: 'WiFi, AC, TV, Extra Beds',
        price: 180,
        photos: 'family_room.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
      {
        roomType: 'Economy Single',
        amentities: 'WiFi, Fan',
        price: 50,
        photos: 'economy_single.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
      {
        roomType: 'Economy Double',
        amentities: 'WiFi, Fan, TV',
        price: 70,
        photos: 'economy_double.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
      {
        roomType: 'Presidential Suite',
        amentities: 'WiFi, AC, TV, Mini Bar, Jacuzzi, Balcony',
        price: 500,
        photos: 'presidential_suite.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
      {
        roomType: 'Studio Room',
        amentities: 'WiFi, AC, TV, Kitchenette',
        price: 150,
        photos: 'studio_room.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
      {
        roomType: 'Honeymoon Suite',
        amentities: 'WiFi, AC, TV, Balcony, Romantic Decor',
        price: 300,
        photos: 'honeymoon_suite.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
      {
        roomType: 'Penthouse',
        amentities: 'WiFi, AC, TV, Mini Bar, Jacuzzi, City View',
        price: 600,
        photos: 'penthouse.jpg',
        checkInTime: '14:00',
        checkOutTime: '12:00',
      },
    ];
  console.log(this.header);


  }


ngAfterViewInit(): void {
  console.log(this.header);


}



}
