// let form = document.querySelector('form');

// form.addEventListener('submit', () => {
//     event.preventDefault();
// })


// document.forms.myForm.addEventListener('keydown', () => {

//     if (event.key == 'f') {
//         event.preventDefault();;
//     }
//     console.log(`keyup => ${event.target.value}`);
// });

// document.forms.myForm.addEventListener('change', () => {
//     console.log(`change => ${event.target.value}`);
// });

// document.forms.myForm.addEventListener('keydown', () => {
//     console.log(`keydown => ${event.target.value}`);
// });

// document.forms.myForm.addEventListener('keypress', () => {
//     console.log(`keypress => ${event.target.value}`);
// });


// document.forms.myForm.addEventListener('input', () => {

// if (event.key == 'f' || event.key == 'a' || event.key == 'r') {
//     event.preventDefault();;
// }

// for (let i = 0; i < 10; i++) {
//     if (event.key == i) {
//         event.preventDefault();
//     }
// }

// if ("0123456789".includes(event.key)) {
//     event.preventDefault();
// }


// if (event.target.value.includes("@mail.ru") ||
//     event.target.value.includes("@list.ru") ||
//     event.target.value.includes("@bk.ru")) {
//     event.target.classList.add('valid');
//     event.target.classList.remove('invalid');
// } else {
//     event.target.classList.add('invalid');
//     event.target.classList.remove('valid');
// }


//     console.log(`keyup => ${event.target.value}`);
// });




document.forms.myForm.addEventListener('submit', function() {
    event.preventDefault();
    let text = document.forms.myForm.title.value;

    if (text == '') {
        return;
    }

    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = text;


    // document.querySelector('.tasks').innerHTML += ` 
    // <li class="list-group-item">${text}</li>
    // `;

    document.querySelector('.tasks').append(li);


    // text = '';

    document.forms.myForm.reset();
});


document.querySelector('.clear').addEventListener('click', () => {
    document.querySelector('.tasks').innerHTML = '';
})

document.querySelector('.tasks').addEventListener('click', () => {

    if (event.target.tagName == 'LI') {
        if (event.target.classList.contains("list-group-item-success")) {
            event.target.classList.remove("list-group-item-success");
        } else
            event.target.classList.add("list-group-item-success");
    }
});


// let lis = document.querySelectorAll('li');