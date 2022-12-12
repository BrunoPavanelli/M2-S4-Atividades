function createTask() {
    const tasksList = document.querySelector('.tasks__list')
    const taskCreatorInput = document.querySelector('.create-tasks__inpt')

    const listBox = document.createElement('li')
    const listTask = document.createElement('p')
    const btnTaskRemove = document.createElement('button')

    listBox.classList.add('tasks__item', 'container', 'intern-padding', 'space-between', 'item-height', 'border-radius__8')
    btnTaskRemove.classList.add('tasks__remove')
    btnTaskRemove.dataset.id = tasksList.childElementCount + 1

    listTask.innerText = taskCreatorInput.value
    btnTaskRemove.innerText = 'Remove'

    listBox.append(listTask, btnTaskRemove)

    return listBox
}

function addTasksToList() {
    const tasksList = document.querySelector('.tasks__list')
    const btnAddTasksToList = document.querySelector('.create-task__submit')

    btnAddTasksToList.addEventListener('click', (e) => {
        e.preventDefault()

        const task = createTask()

        tasksList.append(task)

        removeTaskFromList()
    })
}

function removeTaskFromList() {
    const btnRemoveTasksFromList = document.querySelectorAll('.tasks__remove')

    btnRemoveTasksFromList.forEach(button => {
        button.addEventListener('click', (e) => {
            const listBox = e.composedPath()[1]
            
            listBox.remove()
        })
    })
}

addTasksToList()