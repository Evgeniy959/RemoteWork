// var x;

// if(x){
//     console.log('True');
//     // любое число
//     //  Infinity
//     //  любое строковое значение
//     //
//     //
// }else{
//     console.log('False');
//     // 0
//     // undefined
//     //  NaN
//     //
//     //
// }

// var x = 10;

// if(true){
//     var x = 5;
//     console.log(x); // 5
// }

// console.log(x); // 5

// let x = 10;

// if(true){
//     let x = 5;
//     console.log(x); // 5
// }

// console.log(x); // 10

//var x = 10; // window.x = 10;

// window.console.log(window)

let x = "1";

// false = '0' , 0
// true = 1 , '1'

//все числа это кроме 0 = true // 1,2,3-200,500 == true

// if(0 === true){ // проверка тип данных
//     console.log('True');
// }else{
//     console.log('False');
// }

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    i++;
    console.log(i);
  } else {
    continue;
  }
}

// 2-4-6-8      => 1
// 1-3-5-7-9
// 3-5-7-9      => 2
