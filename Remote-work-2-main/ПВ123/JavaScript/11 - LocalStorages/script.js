let tasks = [];
//let index = 0;

document.addEventListener('DOMContentLoaded', () => {

    let tasksJson = localStorage.getItem('tasks');

    if (tasksJson) {
        tasks = JSON.parse(tasksJson);

        for (const toDo of tasks) {
            drawTask(toDo);
        }
        // console.log(tasks);
    }
});

document.forms.myForm.addEventListener('submit', function() {
    event.preventDefault();
    let text = document.forms.myForm.title.value;

    let toDo = {
        title: text,
        id: Date.now(),
        isDone: false
    };

    drawTask(toDo);

    tasks.push(toDo);

    localStorage.setItem("tasks", JSON.stringify(tasks));


    // text = '';

    document.forms.myForm.reset();



});


function drawTask(todo) {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = '<span>❌</span>' + todo.title;
    li.dataset.id = todo.id;
    li.dataset.isDone = todo.isDone;
    document.querySelector('.tasks').append(li);
}


document.querySelector('.clear').addEventListener('click', () => {
    document.querySelector('.tasks').innerHTML = '';
    localStorage.clear();
})

document.querySelector('.tasks').addEventListener('click', () => {

    if (event.target.tagName == 'LI') {
        if (event.target.classList.contains("list-group-item-success")) {
            event.target.classList.remove("list-group-item-success");
            event.target.dataset.isDone = false;

            let id = event.target.parentElement.dataset.id;
            let toDo = tasks.filter(x => x.id == id);
            toDo.isDone = false;

        } else {
            event.target.classList.add("list-group-item-success");
            event.target.dataset.isDone = true;
            let id = event.target.parentElement.dataset.id;
            let toDo = tasks.filter(x => x.id == id);
            toDo.isDone = true;
        }

    } else if (event.target.tagName == 'SPAN') {
        let id = event.target.parentElement.dataset.id;
        //console.log(tasks);
        tasks = tasks.filter(x => x.id != id);
        //console.log(tasks);

        event.target.parentElement.remove();
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
});


// let lis = document.querySelectorAll('li');