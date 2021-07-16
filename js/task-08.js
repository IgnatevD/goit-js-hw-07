// // Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и 
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// // Создай функцию createBoxes(amount), которая принимает 
// 1 параметр amount - число.Функция создает столько div,
//     сколько указано в amount и добавляет их в div#boxes.

// // Каждый созданный div:

// // Имеет случайный rgb цвет фона
// // Размеры самого первого div - 30px на 30px
// // Каждый следующий div после первого, должен быть шире 
// и выше предыдущего на 10px
// // Создай функцию destroyBoxes(), которая очищает div#boxes.

const div = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const btRender = document.querySelector('button[data-action="render"]');
const btDestroy = document.querySelector('button[data-action="destroy"]');
let numberDiv = 0;
// btRender.addEventListener(`click`, onInputfn);
const randomColorR = parseInt(Math.random() * 255);
const randomColorG = parseInt(Math.random() * 255);
const randomColorB = parseInt(Math.random() * 255);

btRender.addEventListener(`click`, onInput);

function onInput(el) {
    for (let i = 0; i < 10; i++) {
    const clone = div.cloneNode(true);
    div.style.width = `30px`;
    div.style.height = `30px`;
    div.style.backgroundColor = `rgb(${randomColorR},${randomColorG},${randomColorB})`;
    }
}

