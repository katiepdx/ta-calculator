import { addition, subtraction, multiply, divide } from './calculatorUtils.js'

const addNum1 = document.getElementById('add-num-1');
const addNum2 = document.getElementById('add-num-2');
const addButton = document.getElementById('add-button');
const addTotal = document.getElementById('add-total');

addButton.addEventListener("click", () => {
  const num1 = Number(addNum1.value);
  const num2 = Number(addNum2.value);
  const total = addition(num1, num2);

  addTotal.textContent = total;
});

const subtractNum1 = document.getElementById('subtract-num-1');
const subtractNum2 = document.getElementById('subtract-num-2');
const subtractButton = document.getElementById('subtract-button');
const subtractTotal = document.getElementById('subtract-total');

subtractButton.addEventListener("click", () => {
  const num1 = Number(subtractNum1.value);
  const num2 = Number(subtractNum2.value);
  const total = subtraction(num1, num2);

  subtractTotal.textContent = total;
});

const multiplyNum1 = document.getElementById('multiply-num-1');
const multiplyNum2 = document.getElementById('multiply-num-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyTotal = document.getElementById('multiply-total');

multiplyButton.addEventListener("click", () => {
  const num1 = Number(multiplyNum1.value);
  const num2 = Number(multiplyNum2.value);
  const total = multiply(num1, num2);

  multiplyTotal.textContent = total;
});

const divideNum1 = document.getElementById('divide-num-1');
const divideNum2 = document.getElementById('divide-num-2');
const divideButton = document.getElementById('divide-button');
const divideTotal = document.getElementById('divide-total');

divideButton.addEventListener("click", () => {
  const num1 = Number(divideNum1.value);
  const num2 = Number(divideNum2.value);
  const total = divide(num1, num2);

  divideTotal.textContent = total;
});
