const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const priceElements = document.querySelectorAll('[data-ns-test="price"]');

// Initialize a variable to store the total price
let totalPrice = 0;

// Loop through each price element and add its value to the total price
priceElements.forEach((element) => {
  totalPrice += Number(element.textContent);
});

// Set the total price in the table
const totalElement = document.querySelector('[data-ns-test="grandTotal"]');
totalElement.textContent = totalPrice;


  
};

getSumBtn.addEventListener("click", getSum);

