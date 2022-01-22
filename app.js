// Define UI Variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);

    // remove single X elements.
    taskList.addEventListener('click', removeTask);
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('You have to write a task first!');
    } else {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center';
        li.appendChild(document.createTextNode(taskInput.value));
    
        const i = document.createElement('i');
        i.className = 'far fa-times-circle text-danger mx-1 delete-item';
        li.appendChild(i);
        taskList.appendChild(li);

        taskInput.value = '';
        e.preventDefault();
    }
}

function removeTask(e) {
    if (e.target.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.remove();
        }
    }
}