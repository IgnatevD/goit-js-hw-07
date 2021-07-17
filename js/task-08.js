const divMain = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
const btRender = document.querySelector('button[data-action="render"]');
const btDestroy = document.querySelector('button[data-action="destroy"]');

let leng = 0;
const randomColor = () => parseInt(Math.random() * 255);

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const el = document.createElement(`div`);
    el.classList.add(`newDiv`);
    el.style.width = `${30 + i*10}px`;
    el.style.height = `${30 + i*10}px`;
    el.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
        divMain.appendChild(el);
    }
}

input.addEventListener(`change`, onIn => leng = +input.value);

btRender.addEventListener(`click`, e => createBoxes(leng));

btDestroy.addEventListener(`click`, e => destroyBoxes());

function destroyBoxes() {

    const allNewDiv = divMain.children;
    input.value = null;
    
    while (allNewDiv.length > 0) {
        divMain.removeChild(...allNewDiv);
 }
};


