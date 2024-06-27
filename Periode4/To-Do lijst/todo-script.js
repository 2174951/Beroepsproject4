// todo-script.js

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = taskValue;

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Gedaan';
        doneButton.onclick = function() {
            listItem.classList.toggle('done');
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Verwijderen';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(doneButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
