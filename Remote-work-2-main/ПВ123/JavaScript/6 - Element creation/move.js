// // let box = document.querySelector('.box');

// // box.style.setProperty('background-color', `blue`);
// // box.style.setProperty('margin', `100px`);
// // box.style.setProperty('margin', '100px');
// // box.style.setProperty("margin", "200px");


// let h1 = document.querySelector('h1');
// // h1.textContent = "Farid";
// // h1.innerText = "Farid";
// // h1.innerHTML = "Farid";

// //h1.textContent = "Farid<h1>Oleq</h1>";
// //h1.innerText = "Farid<h1>Oleq</h1>";
// //h1.innerHTML = "Farid<h1>Oleq</h1>";


// h1.outerHTML = "<button>Farid</button>"


// ///////////////////////////////////////////////////////////
// // // ctrl + l comment

// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector('#list');
//     let text = prompt("Enter text : "); 

//     list.innerHTML += `<li class="list-group-item">${text}</li>`;
// })




// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector('#list');

//     let li = document.createElement('li');
//     //let li2 = li;//error

//     li.innerText = prompt("Enter text : ");
//     li.classList.add("list-group-item");

//     //let li2 = li.cloneNode(true);;

//     //list.append(li);
//     //list.prepend(li);
//     // list.before(li2);
//     // list.after(li);
//     list.appendChild(li);
// })




// let addBtn = document.querySelector('button'); //'.btn'); //'#addBtn');
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector('#list');


//     let text = prompt("Enter text : ");


//     list.innerHTML += `
//     <li class="list-group-item d-flex justify-content-between align-items-start">
//     <div class="ms-2 me-auto">
//         <div class="fw-bold">${text}</div>
//         Content for list item
//     </div>
//     <span class="badge bg-primary rounded-pill">14</span>
// </li>
//     `;
// })



let addBtn = document.querySelector('button'); //'.btn'); //'#addBtn');
addBtn.addEventListener('click', function() {
    let list = document.querySelector('#list');

    let text = prompt("Enter text : ");


    //     list.insertAdjacentHTML('beforeend', `
    //     <li class="list-group-item d-flex justify-content-between align-items-start">
    //     <div class="ms-2 me-auto">
    //         <div class="fw-bold">${text}</div>
    //         Content for list item
    //     </div>
    //     <span class="badge bg-primary rounded-pill">14</span>
    // </li>`);

    //     list.insertAdjacentHTML('beforebegin', `
    // <li class="list-group-item d-flex justify-content-between align-items-start">
    // <div class="ms-2 me-auto">
    //     <div class="fw-bold">${text}</div>
    //     Content for list item
    // </div>
    // <span class="badge bg-primary rounded-pill">14</span>
    // </li>`);

    //     list.insertAdjacentHTML('afterbegin', `
    // <li class="list-group-item d-flex justify-content-between align-items-start">
    // <div class="ms-2 me-auto">
    //     <div class="fw-bold">${text}</div>
    //     Content for list item
    // </div>
    // <span class="badge bg-primary rounded-pill">14</span>
    // </li>`);


    list.insertAdjacentHTML('afterend', `
<li class="list-group-item d-flex justify-content-between align-items-start">
<div class="ms-2 me-auto">
    <div class="fw-bold">${text}</div>
    Content for list item
</div>
<span class="badge bg-primary rounded-pill">14</span>
</li>`);
})