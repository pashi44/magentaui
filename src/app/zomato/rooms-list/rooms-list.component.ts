  import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges, viewChild, ViewChild} from '@angular/core';

  import { Room, RoomList } from '../../../entities/Room'
  import { CurrencyPipe, NgFor, NgIf, NgClass } from '@angular/common';

  @Component({
    selector: 'room-list',
    imports: [NgFor, NgIf, NgClass, CurrencyPipe],
    templateUrl: './rooms-list.component.html',
    styleUrls: ['./rooms-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

  })
  export class RoomsListComponent implements OnInit , OnChanges{


    // constructor() {}
    @Input() rooms: RoomList[] = []; //onchange can work on this cazhas @input


    @Input()  title : string= '';
@Output() selectedRoom =
new EventEmitter<{ room: RoomList, action: 'push' | 'pop' }>();


  addToContainer(room: RoomList, event: Event) {
    this.selectedRoom.emit(  {room, action : 'push'});
    console.log(event.type.toString());
  }


 popFromContainer(room: RoomList, event: Event) {
    this.selectedRoom.emit({room ,  action : 'pop'});
    console.log(event.type.toString());
  }
    //state
    ngOnInit(): void {


    }


    ngOnChanges(changes: SimpleChanges): void {
// console.log(changes);
    }
  }
