
/* 
Напиши скрипт, который для каждого элемента массива
ingredients создаст отдельный li, после чего вставит
все li за одну операцию в список ul.ingredients.
Для создания DOM - узлов используй
document.createElement().
*/


const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',

  'Зелень',
  'Приправы',
];

const listLi = ingredients.map(item => {
    
    const li = document.createElement(`li`);
    li.textContent = item;

    return li;
});

const ulItem = document.querySelector(`#ingredients`);
ulItem.append(...listLi);





