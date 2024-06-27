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
        doneButton.className = 'done';
        doneButton.onclick = function() {
            listItem.classList.toggle('done');
        };

        const editButton = document.createElement('button');
        editButton.textContent = 'Bewerken';
        editButton.className = 'edit';
        editButton.onclick = function() {
            editTask(listItem);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Verwijderen';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(doneButton);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}

function editTask(listItem) {
    const newTaskValue = prompt('Wijzig taak:', listItem.firstChild.textContent);
    if (newTaskValue !== null && newTaskValue.trim() !== '') {
        listItem.firstChild.textContent = newTaskValue.trim();
    }
}
