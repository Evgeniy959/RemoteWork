let box = document.querySelector('.box');

function random(min = 100, max = 500) {
    return Math.random() * (max - min) + min;
}



setInterval(() => {

    box.style.setProperty('top', `${random(0 , window.innerHeight-150)}px`);
    box.style.setProperty('left', `${random(0 , window.innerWidth-150)}px`);
}, 1000);