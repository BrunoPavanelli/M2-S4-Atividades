const tasksList = document.querySelector('.tasks__list')
const taskCreatorInput = document.querySelector('.create-tasks__inpt')

// DataBase Array that recieves the add Tasks
let arrayOfTasks = []

function updataArrayOfTasks() {
    let task = {
        id: arrayOfTasks.length,
        taskDescription: taskCreatorInput.value
    }

    arrayOfTasks.push(task)
}

function renderTasks() {
    arrayOfTasks.forEach((task)=> {  
        const listBox = document.createElement('li')
        const listTask = document.createElement('p')
        const btnTaskRemove = document.createElement('button')

        listBox.classList.add('tasks__item', 'container', 'intern-padding', 'space-between', 'item-height', 'border-radius__8')
        btnTaskRemove.classList.add('tasks__remove')
        btnTaskRemove.dataset.id = task.id

        listTask.innerText = task.taskDescription
        btnTaskRemove.innerText = 'Remove'

        listBox.append(listTask, btnTaskRemove)
        tasksList.append(listBox)
    }) 

    removeTaskFromList()
}

function addTasksToList() {
    const btnAddTasksToList = document.querySelector('.create-task__submit')
 
    btnAddTasksToList.addEventListener('click', (e) => {
        e.preventDefault()

        updataArrayOfTasks()

        tasksList.innerHTML = ''

        renderTasks()

        taskCreatorInput.value = ''
    })
}

function removeTaskFromList() {
    const btnRemoveTasksFromList = document.querySelectorAll('.tasks__remove')

    btnRemoveTasksFromList.forEach(button => {
        button.addEventListener('click', (e) => {
            let btnRemoveId = e.target.dataset.id
            console.log(btnRemoveId)

            let indexForRemove = arrayOfTasks.findIndex(task => btnRemoveId == task.id)
            
            arrayOfTasks.splice(indexForRemove, 1)

            tasksList.innerHTML = ''
            
            renderTasks()

            console.log(arrayOfTasks)
        })
    })
}

addTasksToList()


