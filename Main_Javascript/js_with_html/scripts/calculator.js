let calculation = '';

// Load calculation from local storage if present
window.onload = function () {
  if (localStorage.getItem('calculation')) {
    calculation = localStorage.getItem('calculation');
    displayCalculation();
  }
};

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem('calculation', calculation); // Save to local storage
  displayCalculation(); // Update display
}

function displayCalculation() {
  document.querySelector('.js-show').innerHTML = calculation;
}

function performCalculation() {
  try {
    calculation = eval(calculation).toString();
    displayCalculation(); // Update display
    console.log(`Result: ${calculation}`);
    localStorage.setItem('calculation', calculation); // Save result to local storage
  } catch (error) {
    alert('Error in calculation');
    calculation = '';
    displayCalculation(); // Clear display
    localStorage.removeItem('calculation'); // Clear from local storage
  }
}

function clearCalculation() {
  calculation = '';
  displayCalculation(); // Clear display
  console.log('Calculation cleared'); // For debugging purposes
  localStorage.removeItem('calculation'); // Clear from local storage
}