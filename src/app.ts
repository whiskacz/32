const inputElement: HTMLInputElement = document.querySelector("#name")
const buttonElement: HTMLButtonElement = document.querySelector("button")
const taskContainer: HTMLElement = document.querySelector(".tasks")

const tasks: { 
    name: string;
    done: boolean;
}[] = [
    {
    name: "make a homework",
    done: false
},
{   
    name: "buy a car",
    done: true
},
{
    name: "build a house",
    done: false
}
]
const render = () => { 
    taskContainer.innerHTML = ""  
    inputElement.value = ""
tasks.forEach((task, index) => {
    const id:string = `task-${index}`
    const taskElement: HTMLElement = document.createElement("li")
    const labelElement: HTMLLabelElement = document.createElement("label")
    const checkElement: HTMLInputElement = document.createElement("input")
    
    labelElement.innerText = task.name
    labelElement.setAttribute("for", id)

    taskContainer.appendChild(taskElement)
    taskElement.appendChild(labelElement)
    taskElement.appendChild(checkElement)

    checkElement.type = "checkbox"
    checkElement.id = id
    checkElement.checked = task.done
    checkElement.addEventListener("change", () =>{
            task.done = !task.done
    })

})
}
render()

const AddTask = (taskName: string) => {
    tasks.push({name: taskName, done: false})
}

buttonElement.addEventListener("click", (e) =>{
    e.preventDefault()
    console.log(inputElement.value)
    AddTask(inputElement.value)
    render()
})