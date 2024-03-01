// // function Test() {
// //     let num = parseInt(event.target.innerText);


// //     if (num == 3) {
// //         event.target.remove();
// //     }
// //     num--;
// //     event.target.innerText = num;
// // }



// //document.querySelector('.box').addEventListener('click', Test);

// // document.querySelector('.box').addEventListener('click', function() {
// //     let num = parseInt(event.target.innerText);
// //     num++;
// //     event.target.innerText = num;
// // });

// // let box = document.querySelector('.box');
// // box.addEventListener('click', function() {
// //     let num = parseInt(event.target.innerText);
// //     num++;
// //     event.target.innerText = num;
// // });


// let count = 0;
// setInterval(() => {
//     // let rand = random (0,5)
//     //switch 0 1 2 3 4
//     console.log(document.querySelector('.box').style.top);
//     document.querySelector('.box').style = `top:${count++}px;left:${count++}px`;
// }, 50);

left - 100 < 800

// // console.log(window.innerHeight); 800 
// // console.log(window.innerWidth);


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let container = document.querySelector('.container');

// for (let i = 0; i < 10; i++) {
//     let element = document.createElement('div');
//     element.innerText = random(4, 7);
//     element.className = "box";
//     element.style.left = random(0, 700) + "px";
//     element.style.left = random(0, 700) + "px";
//     element.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;


//     container.appendChild(element);
// }


// // document.querySelector('.box').addEventListener('click', function() {
// //     let num = parseInt(event.target.innerText);
// //     num++;
// //     event.target.innerText = num;
// // });