 import { EventManager } from '@angular/platform-browser';
import  Employee, {Color} from '../entities/Employee'

let emp : Employee  = new Employee("prashanth", 29, Color.Black );

console.log(emp.getObject());



