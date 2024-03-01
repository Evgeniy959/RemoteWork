// let xhr = new XMLHttpRequest();



// console.log(Date.now());
// xhr.open('GET', 'https://api.github.com/users/Abdullayev999');


// xhr.onload = function() {
//     let json = JSON.parse(xhr.response);

//     console.log(json);
// }

// xhr.send();
// console.log(Date.now());
//console.log(xhr.response);





// function GetRequestAsyn(url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url);

//         xhr.onload = function() {
//             resolve(xhr.response);
//         }

//         xhr.error = function() {
//             reject(new Error(xhr.statusText))
//         }

//         xhr.send();
//     })

// }

// async function main() {
//     try {
//         let data = await GetRequestAsyn("https://api.github.com/users/Abdullayev999");
//         console.log(JSON.parse(data));
//     } catch (error) {
//         console.error(error);
//     }
// }






document.querySelector('button').addEventListener('click', () => {
    main();;
})




async function main() {
    try {
        let response = await fetch("https://api.github.com/users/Abdullayev999", { method: 'GET' });
        let json = await response.json();

        document.querySelector('h1').innerText = json.login;
        document.querySelector('p').innerText = json.bio;
        document.querySelectorAll('p')[1].innerText = json.created_at;
        document.querySelectorAll('p')[2].innerText = json.name;
        console.log(json);
    } catch (error) {
        console.error(error);
    }
}