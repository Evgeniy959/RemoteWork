//let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(arr[0]);
// arr[100] = 999;
// console.log(arr);

// for (const item of arr) {
//     console.log(item);
// }


//arr.name = 'Farid';


// let arr = [1, true, 'Farid', 3.4];
// console.log(arr);

// let arr = ['Farid', 'Nikita', 'Oleq'];
// //console.log(arr.length);

// for (const item of arr) {
//     console.log(item);
// }


// for (const key in arr) {
//     console.log(key);
// }




//let arr = [22, 33, 44, 55, 66];

//console.log(arr);
// arr.push(77);
// console.log(arr);
// arr.unshift(11);
// console.log(arr);


// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);


// arr.splice(0, 3); 
// arr.splice(-2, 1);
// console.log(arr);

// arr.splice(0, 2, 55);
// console.log(arr);


//arr.splice(5, 0, 55, 999, 777, 444);
//console.log(arr);



//let arr1 = [44, 55, 66];
//let arr2 = [11, 22, 33];
//arr.splice(0,2,)

//let result = arr1.concat(arr2);

//arr1.reverse();
//console.log(arr1);


//let arr1 = [44, 55, 66, 55, 99, 88, 44];

//let index = arr1.indexOf(55);
//let index = arr1.lastIndexOf(55);

//console.log(index);
//console.log(arr1[index]);


let arr = [44, 55, 66, 55, 99, 88, 44];

arr.sort();


function eventNumbers(item) {
    // if (item%2==0) {
    //     return true;
    // }else{
    //     return false;
    // }

    // if (item%2==0)  return true;
    // else  return false;


    // if (item%2==0)  return true;

    //  return false;


    // return  item%2==0 ? true : false;

    return item % 2 == 0;

}


function Bolshe55(item) {
    return item > 55;
}

function Menshe55(item) {
    return item < 55;
}


//arr = arr.filter(eventNumbers)
//arr = arr.filter(Bolshe55)
//arr = arr.filter(Menshe55)

//arr = arr.filter(x => x % 2 == 0)
//arr = arr.filter(x => x % 2 != 0)
//arr = arr.filter(x => x > 55)
//arr = arr.filter(x => x < 55)
//console.log(arr);