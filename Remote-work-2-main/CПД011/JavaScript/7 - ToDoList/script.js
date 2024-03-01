// document.forms.myForm.addEventListener('submit', function() {
//     event.preventDefault();

//     let str = document.forms.myForm.taskName.value;
//     console.log(str);


//     document.querySelector('#myList').innerHTML +=
//         `<li class="list-group-item list-group-item-action">${str}</li>
//     `

//     // document.forms.myForm.taskName.value = ""; 

//     document.forms.myForm.reset();
// })


// document.querySelector('#clear').addEventListener('click', function() {
//     document.querySelector('#myList').innerHTML = "";
// })



// // document.forms.myForm.addEventListener('submit', function() {
// //     event.preventDefault();

// //     let str = document.forms.myForm.taskName.value;
// //     console.log(str);


// //     let item = document.createElement('li');
// //     item.className = 'list-group-item';
// //     item.innerText = str;

// //     document.querySelector('#myList').appendChild(item);

// //     document.forms.myForm.reset();
// // })


// // document.querySelector('#clear').addEventListener('click', function() {
// //     document.querySelector('#myList').innerHTML = "";
// // })





// document.forms.myForm.addEventListener('submit', function() {
//     event.preventDefault();

//     let str = document.forms.myForm.taskName.value;
//     console.log(str);

//     let arr = str.split(',');

//     for (const subItem of arr) {
//         if (subItem.length > 0) {
//             let item = document.createElement('li');
//             item.className = 'list-group-item';
//             item.innerText = subItem;

//             document.querySelector('#myList').appendChild(item);
//         }
//     } 
//     document.forms.myForm.reset();
// })


// document.querySelector('#clear').addEventListener('click', function() {
//     document.querySelector('#myList').innerHTML = "";
// })


document.forms.myForm.addEventListener('submit', function() {
    event.preventDefault();

    let str = document.forms.myForm.taskName.value;
    console.log(str);

    let arr = str.split(',');

    for (const subItem of arr) {
        if (subItem.length > 0) {
            let item = document.createElement('li');
            item.className = 'list-group-item';
            item.innerHTML = '<span class="m-1">❌</span><i class="m-2">✔</i>' + subItem;

            document.querySelector('#myList').appendChild(item);
        }
    }
    document.forms.myForm.reset();
})


document.querySelector('#clear').addEventListener('click', function() {
    document.querySelector('#myList').innerHTML = "";
})

document.querySelector('#myList').addEventListener('click', function() {
    console.log(event.target.tagName);

    if (event.target.tagName == 'SPAN') {
        event.target.parentElement.remove();
    } else if (event.target.tagName == 'I') {

        if (event.target.parentElement.classList.contains('done')) {
            event.target.parentElement.classList.remove('done');
        } else {
            event.target.parentElement.classList.add('done');
        }
    }

})