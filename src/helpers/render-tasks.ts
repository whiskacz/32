import { Task } from "../types/types"


export const render = (
    tasks: Task[],
    taskContainer: HTMLElement
    ) => { 
    taskContainer.innerHTML = ""  
    
    tasks.forEach((task, index) => {
    const id:string = `task-${index}`
    const taskElement: HTMLElement = document.createElement("li")
    const labelElement: HTMLLabelElement = document.createElement("label")
    const checkElement: HTMLInputElement = document.createElement("input")
    
    if(task.category){
        taskElement.classList.add(task.category)
    }

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