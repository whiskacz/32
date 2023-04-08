const button = document.querySelector('button');

const calculatePrice = (orginalPrice: number, discount: boolean) => {
   return discount ? orginalPrice * 0.8 : orginalPrice;
}

button.addEventListener("click", () => {
   const orginalPrice: number = 50;
   const discount: boolean = new URLSearchParams(window.location.search).get("discount") === "true";
   console.log(discount)
   console.log(calculatePrice(orginalPrice, discount))
});