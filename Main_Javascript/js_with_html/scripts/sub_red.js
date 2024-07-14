function handle_key() { // Corrected to include event parameter
  console.log(event.key);
  if (event.key === 'Enter') {
    CalculateTotal();
  }
}
function Subscribe() {
  const DocumentElement = document.querySelector('.js-subscribe_button');
  if (DocumentElement.innerHTML === 'Subscribe') {
    DocumentElement.innerHTML = 'Subscribed';
    DocumentElement.classList.add('is-subscribed');
  } else {
    DocumentElement.innerHTML = 'Subscribe';
    DocumentElement.classList.remove('is-subscribed');
  }
}
function CalculateTotal() {
  const inputElement = document.querySelector('.js-input');
  let Cost = Number(parseFloat(inputElement.value));
  const DocumentElement = document.querySelector('.js-total-result'); // Moved outside to avoid repetition
  DocumentElement.classList.remove('red'); // Ensure class 'red' is removed every time function is called
  if (Cost < 0) {
    DocumentElement.classList.add('red');
    DocumentElement.innerHTML = `Error: cost cannot be less than $0`;
  } else if (Cost < 40) {
    Cost += 10;
    DocumentElement.innerHTML = `$${Cost}`;
  } else {
    DocumentElement.innerHTML = `$${Cost}`;
  }
}