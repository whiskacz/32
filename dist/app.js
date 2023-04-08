const button = document.querySelector('button');
const calculatePrice = (orginalPrice, discount) => {
    return discount ? orginalPrice * 0.8 : orginalPrice;
};
button.addEventListener("click", () => {
    const orginalPrice = 50;
    const discount = new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(discount);
    console.log(calculatePrice(orginalPrice, discount));
});
