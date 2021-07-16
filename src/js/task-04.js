let counterValue = 0;
const value = document.querySelector('#counter #value');

const decremetn = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

decremetn.addEventListener(`click`, () => value.textContent = --counterValue);
increment.addEventListener(`click`, () => value.textContent = ++counterValue);

