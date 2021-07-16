const inputNoj = document.querySelector(`input`);

inputNoj.addEventListener(`change`, onInput);

function onInput(event) {
   const isValid = event.currentTarget.value.length === +inputNoj.dataset.length;
   inputNoj.classList.add(isValid ? 'valid' : 'invalid');
}


