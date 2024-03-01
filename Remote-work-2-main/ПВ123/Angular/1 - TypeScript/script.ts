let num = 5;
//num =" 4.5;" ERROR

// let numb : number = 5;
// let bool : boolean = true;
// let str : string = "Farid";
// let something : any;
// something = 4;
// something= "Farid";
// something=true;

// let arr :number[] = [1,2,3,4,5];
// let arr2 : Array<number> = [1,2,3,4,5];

enum Color {
  Red,
  Green,
  Blue,
}

// let color : Color = Color.Red;
// let color2 = Color.Blue;

// let tuple : [string , number] = ["one",2];
// console.log(tuple[0]);
// console.log(tuple[0]);

// function Foo(ageParam:number,nameParam:string):number {
//     return 42;
// }

// let result = Foo(1,"");
// console.log(result);

// interface Person2{
//     age:number;
//     name:string;
//     color?:Color;
// }

// class Person{
//     age:number = 0;
//     name:string = "Unknow";
//     color?:Color;

//     constructor(age:number,name:string = "No name",color:Color = Color.Blue){
// this.name = name;
// this.age = age;
// this.color = color;
//     }

// //     showInfo():void{
// //       //print
// //     }

// // }

// // let person = new Person(27);

// // let p:Person = {name:"Farid",age:27,color:Color.Blue};
// // let p2:Person = {name:"Farid",age:27};

// // function Foo(person:Person) {
// //     console.log(`Name : ${person.name}`);
// //     console.log(`Age : ${person.age}`);

// // }

// // Foo(p);
// // //let p1:Person = {name:"Farid"};

// class Person{

//     static count = 0;

//     constructor(
//         public age:number
//         ,public name:string = "No name"
//         ,public color:Color = Color.Blue
//         ,public readonly id:number){
//             this.id = ++Person.count;
//     }

//     showInfo():void{
//       //print
//     }

// }

// interface ITest{

// }

// interface ITest2{

// }

// class Student extends Person implements ITest,ITest2{
//      /**
//       *
//       */
//      constructor() {
//         super(1,"",Color.Blue,1);

//      }

//      print():void{
//         throw new Error("Method not impplemented!!");
//      }
// }

// class MyList {
//     private arr: Array<number> = [];

//     add(num: number) {
//       this.arr.push(num);
//     }
//   }

//   class MyList<T> {
//     private arr: Array<T> = [];

//     add(num: T) {
//       this.arr.push(num);
//     }
//   }


// import {Person , Car} from 'Test'


import * as Lib from 'Test'

let p : Lib.Person;
let c : Lib.Car;