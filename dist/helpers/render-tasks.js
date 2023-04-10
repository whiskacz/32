export const render = (tasks, taskContainer) => {
    taskContainer.innerHTML = "";
    tasks.forEach((task, index) => {
        const id = `task-${index}`;
        const taskElement = document.createElement("li");
        const labelElement = document.createElement("label");
        const checkElement = document.createElement("input");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        labelElement.innerText = task.name;
        labelElement.setAttribute("for", id);
        taskContainer.appendChild(taskElement);
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkElement);
        checkElement.type = "checkbox";
        checkElement.id = id;
        checkElement.checked = task.done;
        checkElement.addEventListener("change", () => {
            task.done = !task.done;
        });
    });
};
