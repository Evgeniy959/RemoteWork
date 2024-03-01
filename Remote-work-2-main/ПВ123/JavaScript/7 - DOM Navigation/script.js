let arr = ['./pitak.jpg', './1476977240.jpg', './1.png', './Без названия (3).png', './Без названия (1).png', './orel.jpg']


function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


// let btns = document.querySelectorAll('.btn');

// for (const btn of btns) {
//     btn.addEventListener('click', () => {
//         console.log(123);
//         // let imgs = document.querySelectorAll('img');
//         // for (const iterator of imgs) {
//         //     console.log('TEST');
//         // }


//         // let img = document.querySelector('.card > img');
//         // img.src = './Без названия (1).png';  error


//         console.log(event.target.parentElement.previousElementSibling);
//         let index = random(0, arr.length);
//         event.target.parentElement.previousElementSibling.src = arr[index];
//     })
// }



let btns = document.querySelectorAll('.btn');

for (const btn of btns) {
    btn.addEventListener('click', () => {
        console.log(event.target.parentElement.previousElementSibling);
        let index = random(0, arr.length);
        event.target.parentElement.previousElementSibling.src = arr[index];
    })
}

/*
parentElement
children
lastElement
firstElement
previousElementSibling
nextElementSibling


*/