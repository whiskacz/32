const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const button = document.querySelector('button');
const outputDiv = document.querySelector("div");
const addFunc = (v1, v2) => v1 + v2;
button.addEventListener("click", () => {
    const sum = addFunc(Number(input1.value), Number(input2.value));
    console.log(sum);
    const sum2 = sum.toString();
    console.log(sum2);
    outputDiv.textContent = sum2;
});
