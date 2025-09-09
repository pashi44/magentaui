export const enum Color{
Red, Green, Yellow,  Black


}



class Employee {

 private id! : number; //  private field or "#id"
name! : string ;
age!: number;
color! : Color;

static maker  : any    =  Date.now.toString();
// either  only  once constructor , default or paramterized constructor
  constructor( name?: string, age?: number, color?: Color) {


     this.id = Date.now() + Math.floor(Math.random() * 1000);
    if (name) this.name = name ?? '';
    if (age) this.age = age   ??  null;
    if (color !== undefined) this.color = color;
  }




getObject() :  Employee  {   return this} ;


}


export default Employee;
