
const tasksList = document.querySelector('.tasks__list')
const taskCreatorInput = document.querySelector('.create-tasks__inpt')

// DataBase Array that recieves the added Tasks
let arrayOfTasks = []

function updataArrayOfTasks() {
    let task = {
        id: arrayOfTasks.length,
        taskDescription: taskCreatorInput.value
    }

    arrayOfTasks.push(task)
}

function renderTasks(array) {
    array.forEach((task)=> {  
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

        renderTasks(arrayOfTasks)

        let listOfTasks = JSON.stringify(arrayOfTasks)
        localStorage.setItem('@persistArray:listOfTask', listOfTasks)

        taskCreatorInput.value = ''
    })
}

function removeTaskFromList() {
    const btnRemoveTasksFromList = document.querySelectorAll('.tasks__remove')

    btnRemoveTasksFromList.forEach(button => {
        button.addEventListener('click', (e) => {
            let btnRemoveId = e.target.dataset.id

            let indexForRemove = arrayOfTasks.findIndex(task => btnRemoveId == task.id)
            
            arrayOfTasks.splice(indexForRemove, 1)

            tasksList.innerHTML = ''
            
            let listOfTasks = JSON.stringify(arrayOfTasks)
            localStorage.setItem('@persistArray:listOfTask', listOfTasks)
            
            renderTasks(arrayOfTasks)
        })
    })
}

function renderDatainLocalStorage() {
    const listOfTasksinLS = localStorage.getItem('@persistArray:listOfTask')
    console.log(listOfTasksinLS)

    if (listOfTasksinLS) {
        const convertedListOfTasks = JSON.parse(listOfTasksinLS)

        arrayOfTasks = convertedListOfTasks

        renderTasks(convertedListOfTasks)
    }
}

addTasksToList()
renderDatainLocalStorage()


