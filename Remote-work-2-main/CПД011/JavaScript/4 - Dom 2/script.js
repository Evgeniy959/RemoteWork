// document.getElementById  
// document.getElementsByTagName 
// document.getElementsByClassName 
// document.querySelector    
// document.querySelectorAll  

// function Test() {
//     // let num = parseInt(document.querySelector('.box').innerText);
//     // num++;
//     // document.querySelector('.box').innerText = num;
//     //console.log(num);;
// }


// let box = document.querySelector('.box');
// box.style.color = 'green';
// box.style.backgroundColor = 'yellow';
// box.style.fontSize = '80px';
// box.style.border = '10px solid red';

// let boxes = document.querySelectorAll('.box');
// let num = 100;

// for (const box of boxes) {
//     box.style.height = num + 'px';
//     num += 100;
// }

// 3sposoba
// let box = document.querySelector('.box');

// // box.style.width = 200 + 'px';
// box.style = 'background-color: green;';
// // box.style.setProperty('width', '500px')


// let boxes = document.querySelectorAll('.box');
// for (const box of boxes) {
//     box.style.width = 500 + 'px';
// }

// box.style.width = 200 + 'px';
//box.style = 'background-color: green;';
// box.style.setProperty('width', '500px')


function Test() { //  Test(num) {
    // let num = parseInt(document.querySelector('.box').innerText);
    // num++;
    // document.querySelector('.box').innerText = num;

    /////////////////////////////////////////////////////////////
    //ERROR
    // let boxes = document.querySelectorAll('.box');

    // for (const box of boxes) {
    //     let num = parseInt(box.innerText);
    //     num++;
    //     box.innerText = num;

    // }
    /////////////////////////////////////////////////////////////
    // let count = 0;
    // if (num == 1) {
    //     count = parseInt(document.getElementById('one').innerText);
    // } else if (num == 2) {
    //     count = parseInt(document.getElementById('two').innerText);
    // } else if (num == 3) {
    //     count = parseInt(document.getElementById('three').innerText);
    // } else if (num == 4) {
    //     count = parseInt(document.getElementById('four').innerText);
    // } else if (num == 5) {
    //     count = parseInt(document.getElementById('five').innerText);
    // }


    // count++;

    // if (num == 1) {
    //     document.getElementById('one').innerText = count;
    // } else if (num == 2) {
    //     document.getElementById('two').innerText = count;
    // } else if (num == 3) {
    //     document.getElementById('three').innerText = count;
    // } else if (num == 4) {
    //     document.getElementById('four').innerText = count;
    // } else if (num == 5) {
    //     document.getElementById('five').innerText = count;
    // }


    ///////////////////////////////////////////////////////

    //GOOD
    // let boxes = document.querySelectorAll('.box');

    // let count = parseInt(boxes[num].innerText);
    // count++;
    // boxes[num].innerText = count;



    ////////////////////////////////////////////////////////


    // Good 2
    // let num = parseInt(event.target.innerText);
    // num++;
    // event.target.innerText = num;

    ////////////////////////////////////////////////////////


}

// // Good 2
// let boxes = document.querySelectorAll('.box');
// for (const box of boxes) {
//     box.addEventListener('click', function() {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     })

// }



//Good 2  
// let boxes = document.querySelectorAll('.container .box');
// for (const box of boxes) {
//     box.addEventListener('click', function() {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     }) 
// }


//BEST
// let container = document.querySelector('.container');

// container.addEventListener('click', function() {
//    // console.log(event.target.tagName);
//     if (event.target.className == 'box') {
//    //     console.log(555);
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     }
// })