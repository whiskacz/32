import { Category } from "../types/types"

export const renderCategories = (
    categories: Category[],
    categoriesContainer: HTMLElement,
    selectedCategory: Category
) => {
    categories.forEach(category=>{
    const categoriesLiElement: HTMLElement = document.createElement("li")
    const categoriesInputElement: HTMLInputElement = document.createElement("input")
    const categoriesLabelElement: HTMLLabelElement = document.createElement("label")

    categoriesLabelElement.setAttribute("for",`category-${category}`)
    categoriesLabelElement.innerText = category
    
    categoriesInputElement.type = "radio"
    categoriesInputElement.name = "category"
    categoriesInputElement.value = category
    categoriesInputElement.id = `category-${category}`
    categoriesInputElement.addEventListener("change", () =>{
    selectedCategory = category;
    })

    categoriesContainer.appendChild(categoriesLiElement)
    categoriesLiElement.appendChild(categoriesInputElement)
    categoriesLiElement.appendChild(categoriesLabelElement)

})}