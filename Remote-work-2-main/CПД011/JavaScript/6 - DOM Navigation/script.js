// parentElement
// children
//firstElementChild
//lastElementChild
//previousElementSibling
//nextElementSibling


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let arr = [
    'https://cdn.motor1.com/images/mgl/0x6J3/s1/4x3/ferrari-sf90-stradale.webp',
    'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica.jpg',
    'https://1news.az/images/articles/2015/01/22/thumb_20150122054323314.jpg?2021-02-17+09%3A23%3A27',
    'https://avatars.mds.yandex.net/get-verba/216201/2a0000017f6e15f4368df3112afb695baac4/cattouchret',
    'https://www.bmw.az/content/dam/bmw/common/all-models/i-series/i4/navigation/bmw-i4-mini-landingpage-modelfinder.png',
    'https://bakurentacar.az/wp-content/uploads/2019/12/MercedesEclass-BestRent-28122019.jpg',
]




// document.querySelector(".btn").addEventListener('click', function() {
//     //console.log(arr[rand(0, arr.length - 1)]);

//     // let str = document.querySelector('img').src;

//     // while (true) {
//     //     let newStr = arr[rand(0, arr.length - 1)]

//     //     if (str != newStr) {

//     //         document.querySelector('img').src = newStr;
//     //         break;
//     //     }
//     // }


//     let newStr = arr[rand(0, arr.length - 1)];
//     document.querySelector('img').src = newStr;;
// })




// parentElement
// children
//firstElementChild
//lastElementChild
//previousElementSibling
//nextElementSibling


// let btns = document.querySelectorAll('.btn');
// for (const btn of btns) {
//     btn.addEventListener('click', function() {
//         // console.log(event.target.previousElementSibling.previousElementSibling);
//         //   console.log(event.target.parentElement.firstElementChild);
//         //  console.log(event.target.parentElement.children[1]);
//         console.log(event.target.parentElement.previousElementSibling);
//         // let newStr = arr[rand(0, arr.length - 1)];
//         // document.querySelector('img').src = newStr;;
//     })
// }

// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function() {
//         let newStr = arr[rand(0, arr.length - 1)];
//         document.querySelectorAll('img')[i].src = newStr;;
//     })
// }



// let btns = document.querySelectorAll('.btn');
// for (const btn of btns) {
//     btn.addEventListener('click', function() {
//         // console.log(event.target.previousElementSibling.previousElementSibling);
//         //   console.log(event.target.parentElement.firstElementChild);
//         //  console.log(event.target.parentElement.children[1]);
//         //  console.log(event.target.parentElement.previousElementSibling);
//         let newStr = arr[rand(0, arr.length - 1)];
//         event.target.parentElement.previousElementSibling.src = newStr;
//     })
// }



// let btns = document.querySelectorAll('.btn');
// for (const btn of btns) {
//     btn.addEventListener('click', function() {

//         location.href = "https://www.youtube.com/";
//         //window.open('https://www.youtube.com/', '_blank');
//         let str = event.target.parentElement.previousElementSibling.src;
//         while (true) {
//             let newStr = arr[rand(0, arr.length - 1)]

//             if (str != newStr) {

//                 event.target.parentElement.previousElementSibling.src = newStr;
//                 break;
//             }
//         }
//     })
// }




/////////////////////////////////////////

// document.querySelector('input').addEventListener('keydown', function() {
//     console.log(99);
// })


// document.querySelector('input').addEventListener('keyup', function() {
//     console.log(99);
// })



// document.querySelector('input').addEventListener('change', function() {
//     console.log(99);
// })


// document.querySelector('input').addEventListener('keypress', function() {
//     console.log(event);

//     if (event.key.toLowerCase() != 'f' && event.key.toLowerCase() != 'a' && event.key.toLowerCase() != 'd' && event.key.toLowerCase() != 'i' && event.key.toLowerCase() != 'r') {
//         document.querySelector('p').innerText += event.key;
//     }

//     //document.querySelector('p').innerText += event.key.toLowerCase();
//     // document.querySelector('p').innerText += event.key.toUpperCase();
// })
// ;

// document.querySelector('input').addEventListener('keypress', function() {
//     console.log(event);

//     if (event.key.toLowerCase() != 'f' && event.key.toLowerCase() != 'a' && event.key.toLowerCase() != 'd' && event.key.toLowerCase() != 'i' && event.key.toLowerCase() != 'r') {
//         document.querySelector('p').innerText += event.key;
//     } ;



// })

document.querySelector('input').addEventListener('keypress', function() {



    //  console.log(Number(event.key));

    // if (!event.code.toLowerCase().includes("digit")) document.querySelector('p').innerText += event.key;

    // if (!Number(event.key.toLowerCase()) && event.key.toLowerCase() != '0') {



    //     document.querySelector('p').innerText += event.key;

    // if (isNaN(parseInt(event.key))) {

    //     document.querySelector('p').innerText += event.key.toUpperCase();

    // }

    // let isNum = false;
    // for (let i = 0; i < 10; i++) {
    //     if (event.key == i) {
    //         isNum = true;
    //         break;
    //     }
    // }

    // if (!isNum) {
    //     document.querySelector('p').innerText += event.key;

    // }

});



// document.querySelector('input').addEventListener('keypress', function() {
//     console.log(event);
//     for (let i = 0; i < 10; i++) {
//         if (event.key.toLowerCase() != 'i') {
//             document.querySelector('p').innerText += event.key;
//         }
//     }
// });