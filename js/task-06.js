const inputNoj = document.querySelector(`input`);

inputNoj.addEventListener(`change`, onInput);

function onInput(event) {
   const isValid = event.currentTarget.value.length === +inputNoj.dataset.length;
   
   if (isValid) inputNoj.classList.remove('invalid') & inputNoj.classList.add('valid');

   if (!isValid) inputNoj.classList.remove('valid') & inputNoj.classList.add('invalid');
}


