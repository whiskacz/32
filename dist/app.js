import { render } from './helpers/render-tasks.js';
import { renderCategories } from './helpers/render-categories.js';
const inputElement = document.querySelector("#name");
const buttonElement = document.querySelector("button");
const taskContainer = document.querySelector(".tasks");
const categoriesContainer = document.querySelector(".categories");
let selectedCategory;
const categories = ["hobby", "general", "home"];
const tasks = [
    {
        name: "make a homework",
        done: false
    },
    {
        name: "buy a sport car",
        done: true,
        category: "hobby"
    },
    {
        name: "build a house",
        done: false,
        category: "home"
    }
];
render(tasks, taskContainer);
renderCategories(categories, categoriesContainer, selectedCategory);
const AddTask = (task) => {
    tasks.push(task);
};
buttonElement.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputElement.value);
    console.log(selectedCategory);
    AddTask({
        name: inputElement.value,
        done: false,
        category: selectedCategory
    });
    render(tasks, taskContainer);
});
