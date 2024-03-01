function readTable() {
    let arr = [];

    let trs = document.querySelectorAll('tr');

    for (let i = 1; i < trs.length; i++) {
        // console.log(trs[i].innerText);
        let textArr = trs[i].innerText.split('\t');
        let obj = {};
        obj.firstname = textArr[0];
        obj.lastname = textArr[1];
        obj.age = textArr[2];
        obj.company = textArr[3];

        arr.push(obj);
    }

    return arr;
}


function fillTable(arr) {
    let tbdoy = document.querySelector('#tableBody');
    tbdoy.innerHTML = '';



    for (let i = 0; i < arr.length; i++) {
        let templateHtml = document.querySelector('#template').innerHTML;
        let template = Handlebars.compile(templateHtml);


        let html = template({
            firstname: arr[i].firstname,
            lastname: arr[i].lastname,
            age: arr[i].age,
            company: arr[i].company,
        });

        tbdoy.insertAdjacentHTML('beforeend', html);

    }

}

// let arr = readTable();
// fillTable(arr);



function sortAge(a, b) {
    return a.age - b.age;
}


// 10 - 5 = +
// 5 - 10 = -
// 10 - 10 = 0



function sortFirstName(a, b) {
    if (a.firstname > b.firstname) {
        return 1;
    }

    if (a.firstname < b.firstname) {
        return -1;
    }

    return 0;
}


function sortLastname(a, b) {
    if (a.lastname > b.lastname) {
        return 1;
    } else {
        return -1;
    }
}

function sortCompany(a, b) {
    if (a.company > b.company) {
        return 1;
    } else {
        return -1;
    }
}


let ths = document.querySelectorAll('thead th');

for (const th of ths) {
    th.addEventListener('click', () => {
        let arr = readTable();

        let bySort = event.target.innerText;

        switch (bySort) {
            case 'Firstname':
                arr.sort(sortFirstName);
                break;
            case 'Lastname':
                arr.sort(sortLastname);
                break;
            case 'Age':
                arr.sort(sortAge);
                break;
            case 'Company':
                arr.sort(sortCompany);
                break;

            default:
                break;
        }

        fillTable(arr);
        // console.log(bySort);
    });
}