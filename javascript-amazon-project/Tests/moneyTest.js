// moneyTest.mjs

// Import the default export
import formatCurrency from '../scripts/utils/money.js';

// Test the function
let test1 = formatCurrency(2095);

if (test1 === '20.95') {
  console.log('test passed');
} else {
  console.log('test failed');
}
