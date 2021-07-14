console.log(`В списке ${document.querySelectorAll(`li.item`).length} категории.`);

const liItem = document.querySelectorAll(`li.item`);

liItem.forEach(el => {
console.log(
`Категория: ${el.querySelector(`h2`).textContent}
Количество элементов: ${el.querySelectorAll(`li`).length}`);
}
);





