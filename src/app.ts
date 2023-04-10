import { Task, Category } from './types/types';
import { render } from './helpers/render-tasks.js';
import { renderCategories } from './helpers/render-categories.js';

const inputElement: HTMLInputElement = document.querySelector("#name")
const buttonElement: HTMLButtonElement = document.querySelector("button")
const taskContainer: HTMLElement = document.querySelector(".tasks")
const categoriesContainer: HTMLElement = document.querySelector(".categories")

let selectedCategory: Category;


const categories: Category[] = ["hobby", "general", "home"]

const tasks: Task[] = [
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
]

render(tasks, taskContainer)




renderCategories(categories, categoriesContainer, selectedCategory)

const AddTask = (task: Task) => {
    tasks.push(task)
}

buttonElement.addEventListener("click", (e) =>{
    
    e.preventDefault()
    console.log(inputElement.value)
    console.log(selectedCategory)
    AddTask({
        name: inputElement.value, 
        done: false, 
        category: selectedCategory})
    render(tasks, taskContainer)
})