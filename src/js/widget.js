import isValidCard from './validators.js';
import luhnAlg from './luhnAlg.js';

export default function widget() {
  const cardsAll = [...document.getElementsByClassName('card')];
  const input = document.querySelector('.input');
  const button = document.querySelector('.button-validate');
  const formValidate = document.querySelector('.form-validate');
  const label = document.querySelector('.label');
  input.addEventListener('input', () => {
    const valueCard = isValidCard(input.value);
    for (const card of cardsAll) {
      if (input.value.length === 0) {
        card.style.opacity = 1;
      } else {
        card.style.opacity = 0.2;
      }
      if (card.classList.contains(valueCard)) {
        card.style.opacity = 1;
      }
    }
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const resultAlgorithm = luhnAlg(input.value);
      if (input.value.length === 0) return;
      if (resultAlgorithm) {
        formValidate.style.backgroundColor = 'green';
        label.textContent = 'Проверка прошла';
      } else {
        formValidate.style.backgroundColor = 'red';
        label.textContent = 'Проверьте номер карты!';
      }
    });
  });
}
