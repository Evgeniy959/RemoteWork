// let box = document.querySelector('.box');

// function random(min = 100, max = 500) {
//     return Math.random() * (max - min) + min;
// }


// function foo() {
//     console.log("Hello");
// }


// setInterval(() => {

//     box.style.setProperty('top', `${random(0 , window.innerHeight-150)}px`);
//     box.style.setProperty('left', `${random(0 , window.innerWidth-150)}px`);
// }, 1000);


// let box = document.querySelector('.box');
//box.onclick = foo;
// box.onmousemove = foo;

// //box.addEventListener('click', foo);

// // box.addEventListener('click', function(params) {
// //     console.log("Hello");
// // });


// box.addEventListener('mousemove', () => {
//     console.log("Hello");
// });


// let box = document.querySelector('.box');

// box.addEventListener('click', () => {
//     box.innerText = 'Farid';
// });

// box.addEventListener('click', () => {
//     let num = box.innerText;
//     if (num > 0) {
//         num = num - 1;
//         box.innerText = num;
//     }
// });


// let box = document.querySelector('.box');

// box.addEventListener('click', () => {
//     if (box.innerText > 0) box.innerText = --box.innerText; 
// });



// let box = document.querySelector('.box');
// box.addEventListener('mousemove', () => {
//     if (box.innerText < 100) box.innerText = ++box.innerText;

// });

// let box = document.querySelector('.box');
// box.addEventListener('mouseleave', () => {
//     if (box.innerText < 100) box.innerText = ++box.innerText;

// });


// let box = document.querySelector('.box');
// box.addEventListener('mousemove', () => {
//     if (box.innerText < 100) box.innerText = ++box.innerText; 
// });


// let boxes = document.querySelectorAll('.box');
// for (const box of boxes) {
//     box.addEventListener('mousemove', () => {
//         if (box.innerText < 100) box.innerText = ++box.innerText;
//     });
// }


// let boxes = document.querySelectorAll('.box');
// for (let i = 0; i < boxes.length; i++) {

//     boxes[i].addEventListener('mousemove', () => {
//         if (boxes[i].innerText < 100) boxes[i].innerText = ++boxes[i].innerText;
//     });




//     // if (i == 0) {
//     //     boxes[i].style.setProperty("background-color", "green");;
//     //     console.log(1);
//     //     boxes[i].addEventListener('mousemove', () => {
//     //         boxes[i].innerText = ++boxes[i].innerText;

//     //     });
//     // } else if (i == 1) {
//     //     console.log(2);
//     //     boxes[i].style.setProperty("background-color", "blue");;
//     //     boxes[i].addEventListener('click', () => {
//     //         boxes[i].innerText = --boxes[i].innerText;

//     //     });
//     // } else if (i == 2) {
//     //     console.log(3);
//     //     boxes[i].style.setProperty("background-color", "grey");;
//     //     boxes[i].addEventListener('mouseleave', () => {
//     //         boxes[i].innerText = boxes[i].innerText *= 2;

//     //     });
//     // } else if (i == 3) {
//     //     console.log(4);
//     //     boxes[i].addEventListener('click', () => {
//     //         boxes[i].innerText = boxes[i].innerText / 2;
//     //     });
//     // }
// }



// let box = document.querySelector('.box');

// box.addEventListener('click', () => {
//     console.log(event);
// });




// let boxes = document.querySelectorAll('.box');

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('mousemove', () => {
//         if (boxes[i].innerText < 100) boxes[i].innerText = ++boxes[i].innerText;
//     });
// }



// container.addEventListener('click', () => {
//     console.log(event.target);
//     console.log(event.currentTarget);
//     if (event.target.tagName = 'DIV') {
//         event.target.innerText = ++event.target.innerText;
//     }
//     //if (boxes[i].innerText < 100) boxes[i].innerText = ++boxes[i].innerText;
// });


// document.querySelector('a').addEventListener('click', () => {
//     console.log('Hello');
//     console.log('Hello');
//     console.log('Hello');
//     console.log('Hello');
//     console.log('Hello');
//     console.log('Hello');
//     console.log('Hello');
//     event.preventDefault();
// })


let count = 10;

let container = document.querySelector('.container');
for (let index = 0; index < count; index++) {
    let div = document.createElement('div');
    div.className = 'box';
    div.innerText = index + 1;
    div.style.backgroundColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
    div.style.setProperty('left', `${random(0 , window.innerWidth-150)}px`);
    div.style.setProperty('top', `${random(0 , window.innerHeight-150)}px`);
    container.appendChild(div);
}

function random(min = 100, max = 500) {
    return Math.random() * (max - min) + min;
}


// setInterval(() => {

//     box.style.setProperty('top', `${random(0 , window.innerHeight-150)}px`);
//     box.style.setProperty('left', `${random(0 , window.innerWidth-150)}px`);
// }, 1000);



let box = document.querySelector('.box');

box.addEventListener('click', () => {
    if (box.innerText > 0) box.innerText = --box.innerText;
    //  else event.target.style.display = 'none';
    else {
        event.target.remove();
        count--;
    }
});