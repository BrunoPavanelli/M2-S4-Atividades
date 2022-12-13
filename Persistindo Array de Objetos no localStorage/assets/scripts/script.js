const tasksList = document.querySelector('.tasks__list')
const taskCreatorInput = document.querySelector('.create-tasks__inpt')
const addModal = document.querySelector('.task__added')
const modalDiv = document.querySelector('.modal__info')
const modalText = document.querySelector('.modal__txt')
const modalTimeIn = 2000
const modalTimeExposed = 3000

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

        if (taskCreatorInput.value) {
            updataArrayOfTasks()

            tasksList.innerHTML = ''

            renderTasks(arrayOfTasks)

            let listOfTasks = JSON.stringify(arrayOfTasks)

            localStorage.setItem('@persistArray:listOfTask', listOfTasks)

            showAndCloseToast('Task added succesfully') 
            
            taskCreatorInput.value = ''

        } else if (!taskCreatorInput.value) {
            showAndCloseErrorToast() 
            
        }
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

            showAndCloseToast('Task removed succesfully')
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

function showAndCloseToast(text) {
    modalText.innerText = text
        addModal.show()
        setTimeout(() => {
            addModal.classList.add('modal__out')
        }, modalTimeIn)
        // setTimeout(() => )
        setTimeout(() => {
            addModal.close()
            addModal.classList.remove('modal__out')
        }, modalTimeExposed) 
}

function showAndCloseErrorToast() {
    modalDiv.classList.add('modal__error')
    modalText.innerText = 'Please, insert your Task'
    addModal.show()
    setTimeout(() => {
        addModal.classList.add('modal__out')
    }, modalTimeIn)

    setTimeout(() => {
        addModal.close()
        addModal.classList.remove('modal__out')
        modalDiv.classList.remove('modal__error')
    }, modalTimeExposed)
}

addTasksToList()
renderDatainLocalStorage()


