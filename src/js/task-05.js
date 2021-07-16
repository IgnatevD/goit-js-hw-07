const nameInput = document.querySelector('#name-input');
const newName = document.querySelector('#name-output');

nameInput.addEventListener(`input`, onInput)

function onInput(event) {
    if (!event.currentTarget.value) {
    return newName.textContent = "незнакомец"
    }
   return newName.textContent = event.currentTarget.value;
}