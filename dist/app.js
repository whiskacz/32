const inputElement = document.querySelector("#name");
const buttonElement = document.querySelector("button");
const taskContainer = document.querySelector(".tasks");
const tasks = [
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
];
const render = () => {
    taskContainer.innerHTML = "";
    inputElement.value = "";
    tasks.forEach((task, index) => {
        const id = `task-${index}`;
        const taskElement = document.createElement("li");
        const labelElement = document.createElement("label");
        const checkElement = document.createElement("input");
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
render();
const AddTask = (taskName) => {
    tasks.push({ name: taskName, done: false });
};
buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputElement.value);
    AddTask(inputElement.value);
    render();
});
