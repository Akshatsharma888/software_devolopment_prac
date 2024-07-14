/this is Chapter-9 Arrays And Loops(exercises) in javascript./;

// 1.
function arrayChecker(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "search") {
      console.log(i);
      break;
    }
    if (array[i] === array.length) {
      console.log(-1);
    }
  }
}

arrayChecker(["hello", "hii", "search", "no", "search"]);
arrayChecker(["not found"]);
// ------------------------------------------------------

// 2.
function arrayCheck(array_w, word) {
  for (let i = 0; i < array_w.length; i++) {
    if (array_w[i] === word) {
      console.log(i);
      break;
    }
    if (array_w[i] === array_w.length) {
      console.log(-1);
    }
  }
}

arrayCheck(["hello", "hii", "search", "no", "search"], "no");
arrayCheck(["not found"], "no");
// ------------------------------------------------------

// 3.
function removeEggs(foods) {
  let result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'eggs') {
      continue;
    } else {
      result.push(foods[i]);
    }
  }
  console.log(result);
}

removeEggs(['eggs', 'apple', 'eggs', 'eggs', 'ham']);
// ------------------------------------------------------

// 4.
function removeLastTwoEggs(foods) {
  let result = [];
  let eggsRemoved = 0;
  // foods.splice([i],0);
  foods.reverse();
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'eggs' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    } else {
      result.push(foods[i]);
    }
  }
  result.reverse();
  console.log(result);
}

removeLastTwoEggs(['eggs', 'apple', 'eggs', 'eggs', 'ham']);
// ------------------------------------------------------

// 5.fizz_buzz
function fizz_buzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizz_buzz();

// 1.
function arrayC(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (res.findIndex(item => item === array[i]) === -1) {
      res.push(array[i]);
    }
  }
  return res;
}

console.log(arrayC(["hello", "hii", "search", "hii", "search"])); // Output: ["hello", "hii", "search"]