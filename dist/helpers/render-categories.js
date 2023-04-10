export const renderCategories = (categories, categoriesContainer, selectedCategory) => {
    categories.forEach(category => {
        const categoriesLiElement = document.createElement("li");
        const categoriesInputElement = document.createElement("input");
        const categoriesLabelElement = document.createElement("label");
        categoriesLabelElement.setAttribute("for", `category-${category}`);
        categoriesLabelElement.innerText = category;
        categoriesInputElement.type = "radio";
        categoriesInputElement.name = "category";
        categoriesInputElement.value = category;
        categoriesInputElement.id = `category-${category}`;
        categoriesInputElement.addEventListener("change", () => {
            selectedCategory = category;
        });
        categoriesContainer.appendChild(categoriesLiElement);
        categoriesLiElement.appendChild(categoriesInputElement);
        categoriesLiElement.appendChild(categoriesLabelElement);
    });
};
