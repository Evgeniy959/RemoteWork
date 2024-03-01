document.forms.myForm.addEventListener('submit', () => {
    event.preventDefault();

    let text = document.querySelector('textarea').value;
    let p = document.querySelector('#result');
    p.textContent = text;



    if (document.querySelector('#Bold').checked) {
        p.style.setProperty('font-weight', 'bold');
    }

    if (document.querySelector('#Underline').checked) {
        p.style.setProperty('text-decoration', 'underline');
    }

    if (document.querySelector('#Italic').checked) {
        p.style.setProperty('font-style', 'italic');
    }

    switch (document.forms.myForm.type.value) {
        case 'Left':
            p.style.setProperty('text-align', 'start');
            break;
        case 'Right':
            p.style.setProperty('text-align', 'end');
            break;
        case 'Justify':
            p.style.setProperty('text-align', 'center');
            break;

        default:
            break;
    }

    document.forms.myForm.hidden = true;
    document.querySelector('.result').hidden = false;
    document.querySelector('.result').insertAdjacentHTML(p);


});



let btn = document.querySelector('button');
let text = document.querySelector('textarea');

text.addEventListener('input', () => {
    if (text.value.length > 0) {
        btn.hidden = false;
    } else {
        btn.hidden = true;
    }
})




let back = document.querySelector('#back');
back.addEventListener('click', () => {
    document.forms.myForm.hidden = false;
    document.querySelector('.result').hidden = true;
})