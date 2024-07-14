/this is Chapter-9 Arrays And Loops in javascript./;

// Arrays they are another type of values in js that represent a list of values.
const myArray = [10, 20, 30, 40];
console.log(myArray);
console.log(myArray[0], myArray[2]);
myArray[2] = 100;
console.log(myArray);

const Arrays2 = [1, "hello", true, 5.8];
console.log(Arrays2);
console.log(typeof Arrays2);

const Arrays3 = [1, "hello", true, 5.8, { Name: "akshat" }];
console.log(Arrays3);

const Arrays4 = [
  1,
  "hello",
  true,
  5.8,
  { Name: "akshat" },
  [100, 200, 300, 400],
];
console.log(Arrays4);
console.log(Array.isArray([100, 200, 300, 400]));

// array methods.
// 1.this method adds the value at the end of the array.
myArray.push(500);
console.log(myArray);

// 2.this method requires at which index we want to remove element and how many we have to remove.
myArray.splice(4, 1);
console.log(myArray);

// ---------------------------------------------------------
// Loops in js helps to run code over and over again.

// 1.while loop.
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// 2.for loop
for (let k = 1; k <= 5; k++) {
  console.log(k * 2);
}

const todolist = ["a", "b", "c"];
for (let index = 0; index <= todolist.length - 1; index++) {
  const value = todolist[index];
  console.log(value);
}

// accumalator pattern in an array.
const s_arr = [2, 2, 3];
let total = [];
for (let i = 0; i <= s_arr.length - 1; i++) {
  const num = s_arr[i] * 2;
  total += num;
}
console.log(total);

// Arrays and Loops exercises.
//1.
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);
// ---------------------------

const num2 = ["hi", "hello", "good"];
//2.
function getLastValue(value) {
  if (value.length > 0) {
    const lastVal = value[value.length - 1];
    console.log(lastVal);
  } else {
    console.log("Array is empty");
  }
}
getLastValue(nums);
getLastValue(num2);
// ---------------------------

//2.
function arraySwap_val(val) {
  if (val.length > 1) {
    // Swap first and last elements using a for loop
    for (let i = 0; i < val.length; i++) {
      if (i === 0) {
        let temp = val[i];
        val[i] = val[val.length - 1];
        val[val.length - 1] = temp;
        break; // Exit the loop after swapping
      }
    }
  }
  console.log(val);
}
arraySwap_val(nums);
// ---------------------------

//3.
function count() {
  for (let i = 0; i <= 11; i++) {
    console.log(i * 2);
  }
}
count();
// ---------------------------

//4.
function count2() {
  for (let i = 5; i >= 0; i--) {
    console.log(i);
  }
}
count2();

let i1 = 5;
while (i1 >= 0) {
  console.log(i1);
  i1--;
}
// ---------------------------

//5.
// const a_arr = [1, 2, 3];
let total1 = 0; // Initialize total1 as a number
const incrementedArr = []; // Initialize an empty array to store incremented values
function Addonearray(a_arr) {
  for (let i = 0; i <= a_arr.length - 1; i++) {
    const num = a_arr[i] + 1; // Increment each element by 1
    incrementedArr.push(num); // Add the incremented value to the new array
    total1 += num; // Add num to total1
  }

  console.log(incrementedArr);
}
// Addonearray([1, 2, 3]);
Addonearray([-2, -1, 0, 99]);
// ---------------------------

//6.
function AddNum(array, num) {
  const final_arr = [];
  for (let i = 0; i <= array.length - 1; i++) {
    const f_num = array[i] + num;
    final_arr.push(f_num);
  }
  console.log(final_arr);
}
AddNum([1, 2, 3], 2);
AddNum([1, 2, 3], 3);
AddNum([-2, -1, 0, 99], 2);
// ---------------------------

//7.
function Addarr2(array1, array2) {
  const final_arr = [];
  for (let i = 0; i < array1.length; i++) {
    const f_num = array1[i] + array2[i];
    final_arr.push(f_num);
  }
  console.log(final_arr);
}

Addarr2([1, 1, 2], [1, 1, 3]);
Addarr2([1, 2, 3], [4, 5, 6]);
// ---------------------------

//8.
function countPositive(array) {
  let count = 0; // Initialize count as a number
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++; // Increment count for each positive number
    }
  }
  return count; // Return the count
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
// ---------------------------

//9.
function min_max(ar) {
  if (ar.length === 0) {
    console.log(`min: ${null}, max: ${null}`);
    return;
  }

  let min = ar[0];
  let max = ar[0];

  for (let i = 1; i < ar.length; i++) {
    if (ar[i] < min) {
      min = ar[i];
    }
    if (ar[i] > max) {
      max = ar[i];
    }
  }

  console.log(`min: ${min}, max: ${max}`);
}

min_max([1, -3, 5]);
min_max([-2, 3, -5, 7, 10]);
min_max([]);
min_max([3]);

// ---------------------------

// 10.
// destucturing an array.
const [firstval, secondval, thirdval] = [20, 30, 45];
console.log(firstval);

// 10.use of for loop with break and continue.
for (let k = 1; k <= 12; k++) {
  if (k === 5) {
    continue; //it skips the iteration
  }
  if (k === 11) {
    break; //it breaks the loop in between.
  }
  console.log(k);
}
// ---------------------------
