// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.

const inputNoj = document.querySelector(`input`);

inputNoj.addEventListener(`change`, onInput);

function onInput(event) {
   event.currentTarget.value.length === +inputNoj.dataset.length ?
      inputNoj.id = 'validation-input.valid' : inputNoj.id = 'validation-input.invalid';
   // inputNoj.classList.add = 'valid' : inputNoj.classList.toggle = 'invalid';
}


// function onInput(event) {
//    if (event.currentTarget.value.length=== +inputNoj.dataset.length ) {
//    return inputNoj.classList.add = 'valid'; 
//    }
//    console.log(inputNoj);
//    return inputNoj.classList.toggle = 'invalid';
// }

