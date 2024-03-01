let body = document.querySelector('body');


document.addEventListener('DOMContentLoaded', () => {

    //theme=red
    //max-age=86400;
    // console.log(document.cookie.split(';')[0].split('=')[1]);;

    body.style.setProperty('background-color', document.cookie.split(';')[0].split('=')[1]);
});

document.querySelector('#redBtn').addEventListener('click', () => {
    console.log('red');

    document.cookie = "theme=red;max-age=86400";
    body.style.setProperty('background-color', 'red');
    body.classList().add("")
});

document.querySelector('#blueBtn').addEventListener('click', () => {
    console.log('blue');
    document.cookie = "theme=blue;max-age=86400";
    body.style.setProperty('background-color', 'blue');
});

document.querySelector('#greenBtn').addEventListener('click', () => {
    console.log('green');
    document.cookie = "theme=green;max-age=86400";
    body.style.setProperty('background-color', 'green');
});

document.querySelector('#yellowBtn').addEventListener('click', () => {
    console.log('yellow');
    document.cookie = "theme=yellow;max-age=86400";
    body.style.setProperty('background-color', 'yellow');
});



// document.querySelector('#btn1').addEventListener('click', () => {

// });

// document.querySelector('#btn2').addEventListener('click', () => {

// });
// document.querySelector('#btn3').addEventListener('click', () => {

// });
// document.querySelector('#btn4').addEventListener('click', () => {

// });
// document.querySelector('#btn5').addEventListener('click', () => {

// });
// document.querySelector('#btn6').addEventListener('click', () => {

// });
// document.querySelector('#btn7').addEventListener('click', () => {

// });
// document.querySelector('#btn8').addEventListener('click', () => {

// });
// document.querySelector('#btn9').addEventListener('click', () => {

// });
// document.querySelector('#btn10').addEventListener('click', () => {

// });