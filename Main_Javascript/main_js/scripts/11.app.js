function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

function testing(test, newVal) {
  if (test === newVal) {
    console.log('test passed');
  } else {
    console.log('test failed');
  }
}

// these are basic tests.
let test1 = formatCurrency(2005); // Call with only the cents value
let test2 = formatCurrency(0);
testing(test1, '20.05'); // Compare the actual result with the expected output
testing(test2,'0.00');

// this is an edge test case.
let test3 = formatCurrency(2000.5)
let test4 = formatCurrency(2000.4)
testing(test3,'20.01');
testing(test4,'20.00');
