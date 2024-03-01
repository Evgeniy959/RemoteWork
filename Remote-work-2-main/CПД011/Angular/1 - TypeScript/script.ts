// // let num = 5;
// // //num = "hello";
// // //num = true;
// // num = 4.4; 


// // let num = "hello";


// // const z = 6;
// // z = 10;



// // let num = 5;
// // let bool = true;
// // let str = "Hello";





//  // let num :number = 5;
// // let bool: boolean = true;
// // let str : string = "Hello";


// // let something:any ;
// // something = 5;
// // something = "Hello";


// //console.log(num);


// //  let num :number = 5;
// // let bool: boolean = true;
// // let str : string = "Hello";


// // let arr :number[]=[1,2,3,4,5];
// // let arr1 =["1,2,3,4,5","Hello"];


// // let arr:Array<number> = [1,2,3,4,5];


// // enum Color{Red,Green,Blue};

// // let color =Color.Blue;


// // let typle:[string,number] = ['one',2];
// // console.log(typle);
// // console.log(typle[0]);
// // console.log(typle[1]);




// // let age:number = 25;
// // let myName:string = "Farid";
// // let result:any= Foo(age,myName);
// // console.log(result);


// // function Foo(ageParam:number,nameParam:string):void {
// //     console.log(ageParam + " " + nameParam);
    
// // }



// // let age:number = 25;
// // let myName:string = "Farid";
// // //let result:number= Foo(age,myName);
// // //console.log(result);


// // // function Foo(ageParam:number,nameParam:string):number {
// // //     console.log(ageParam + " " + nameParam);
// // //     return ageParam;
// // // }

// // let foo = (ageParam :number,nameParam : string):void=>  console.log(ageParam + " " + nameParam);


// // let x = 10;

// // {
// //     let x = 5;
// //     console.log(x);/// 5
    
// // }
// // console.log(x);///10

// {
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
//     var x =10;
// }
// console.log(x);



// // interface Person{

// // }


//boolean
//number
//string
//Array
//Enum
//Any
//null undefined
//Tuple
//



// function GetStr() :number{
//     return "1";
// }

// function GetStr() :string{
//     return "No name";
// }


// // function getName(firstName:string = "Farid"):string {
// //     return firstName;
// // }

// function getName(firstName:string = GetStr()):string {
//     return firstName;
// }

// console.log(getName());




// let sum1  = (x:number|boolean,y:number)=>x + y;
//  let sum  = (x=0,y=0)=>x + y;
// // let val = sum(10,10);

// let hi = ()=>"Hello";
// let hi2 = (x=5)=>"Hello";


// let id:number|string;
// id = "Farid";
// console.log(id);
// id = 5;
// console.log(5);


// let x:null = null;
// let y:undefined = undefined;

 

// enum Gender {Male,Female};

// interface Person
// {
//     age:number;
//     name:string;
//     gender?:Gender;
// }



// let p:Person = {
//     name:"Farid",
//     age:26
// };


// function PrintPerson(person:Person) {
//     console.log(`Name : ${person.name}`);
//     console.log(`Age : ${person.age}`);
    
// }


// PrintPerson(p);
// PrintPerson( { name:"Farid",  age:26 , gender:Gender.Male});

//  let v = {  name:"Farid", age:26 , age2:26 };

// // console.log(p.name);


// let person1:{name:string;age:number} = {name:"Farid",age:36};
// let person2:{name:string;age?:number} = {name:"Dima"};


// function printPerson(person:{name:string;age?:number}) {
//     // console.log(`Name : ${person.name}`);
//     // console.log(`Age : ${person.age}`);
//     if("name" in person){
//         console.log(`Name : ${person.name}`);
//     }

//     if("age" in person){
//         console.log(`Age : ${person.age}`);
//     }
// }

// printPerson(person1);
// //Name : Farid
// //Age : 36
// printPerson(person2);
// //Name : Dima
// //Age : 

// type id = number | string;

// let userId :id=5;

// type Person = {name:string,age:number};
// type Teacher = Person & {salary:number};


// let farid:Teacher = {name:"Farid",age:26,salary:5600}



// enum Gender {Male,Female};

// class Person{
//     age:number=0;
//     private name:string="Farid";
//     gender:Gender=Gender.Male;


//     constructor(age:number,name:string,gender:Gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     } 
//     showInfo() : void{

//     }
// }


enum Gender {Male,Female};

class Person{ 

readonly id :number;
static count :0;
private _tmp :number = 0;



    constructor(
        public age:number,
        public name:string,
        public gender:Gender){
        this.name = name;
        this.age = age;
        this.gender = gender;

        this.id = 5;
    } 
    showInfo() : void{

    }


    
    // private _value : string;
    // public get value() : string {
    //     return this._value;
    // }
    // public set value(v : string) {
    //     this._value = v;
    // }
    
}
let p:Person = new Person(26,"Farid",Gender.Male); 
Person.count++;

interface ITest{
print():void;
}

class Ok{

}

class Student extends Person implements ITest{
    print(): void {
        // throw new Error("Method not implemented.");
    }
// constructor(){
//            // super()
// }
}




class MyList<T>{
    private arr:T[] =[];

    public add(param:T):boolean{
        let count = this.arr.length;
                this.arr.push(param);
if (count!=this.arr.length) {
    return true;
}

                return false;
    }



    //Add
}