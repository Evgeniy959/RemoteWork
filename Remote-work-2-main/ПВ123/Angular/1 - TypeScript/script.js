var num = 5;
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var Person = /** @class */ (function () {
    function Person(age, name, color) {
        if (name === void 0) { name = "No name"; }
        if (color === void 0) { color = Color.Blue; }
        this.age = 0;
        this.name = "Unknow";
        this.name = name;
        this.age = age;
        this.color = color;
    }
    return Person;
}());
var person = new Person(27);
var p = { name: "Farid", age: 27, color: Color.Blue };
var p2 = { name: "Farid", age: 27 };
function Foo(person) {
    console.log("Name : ".concat(person.name));
    console.log("Age : ".concat(person.age));
}
Foo(p);
//let p1:Person = {name:"Farid"};
