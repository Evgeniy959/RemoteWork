// document.querySelector('h1').innerText = "Farid";


// let obj = {
//     name: "Farid",
//     age: 27,

//     showInfo: function() {
//         console.log(`Name : ${this.name} , Age : ${this.age}`);
//     }

// };

// console.log(obj);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let person = new Person("Farid", 27);
// person.test();

// console.log(person);



// class Person {
//     test = 'Test';

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     show() {
//         console.log(`Group : ${this.name} , Age : ${this.age}`);
//     }
// }


// class Student extends Person {
//     constructor(group) {
//         super("Noname", 27);
//         this.group = group;

//     }

//     show() {
//         //kdmckdmckdmcd

//         super.show();
//     }


//     Test() {
//         this.show();
//         console.log(`Group : ${this.group} , Age : ${this.age}`);
//     }
// }


// let person = new Person("Farid", 27);
// console.log(person);

// let student = new Student("PV123");
// student.show();
// console.log(student);


class Person {
    //_test = 'Test';
    // _salary;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get getAge() {
        return this.age;
    }

    static Test() {
        console.log("Test");
    }

    set setAge(value) {
        this.age = value;
    }

    _test;

    show() {
        console.log(`Group : ${this.name} , Age : ${this.age}`);
    }
}


// let person = new Person("Farid", 27);
// person.age = 10;
// console.log(person._salary);
Person.Test();