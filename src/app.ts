const input1: HTMLInputElement = document.querySelector("#input1")
const input2: HTMLInputElement = document.querySelector("#input2")
const button = document.querySelector('button')
const outputDiv = document.querySelector("div")

const addFunc = (v1: number, v2:number) => v1 + v2

button.addEventListener("click", () => {
    const sum = addFunc(Number(input1.value), Number(input2.value))
    const sum2 = sum.toString()
    outputDiv.textContent = sum2
})