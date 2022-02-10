// Task 1
// The sum of a range
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
// If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(a, b, c = 1) {
  let numbers = [];

  if (a < b) {
    for (let i = a; i <= b; i += c) {
      numbers.push(i);
    }
  } else {
    for (let i = a; i >= b; i += c) {
      numbers.push(i);
    }
  }

  return numbers;
}

console.log(range(5, 1, -1));

function sum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}

console.log(sum(range(1, 10)));

// Task 2
// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear.
// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
// Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

function reverseArray(arr) {
  let reverseArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArray.push(arr[i]);
  }
  return reverseArray;
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arr) {
  let half = Math.floor(arr.length / 2);
  for (let i = 0; i < half; i++) {
    let temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log(reverseArrayInPlace(arrayValue));
console.log(arrayValue);

// Task 3

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

// Also write a listToArray function that produces an array from a list.
// console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

//Then add a helper function prepend,
// which takes an element and a list and creates a new list that adds the element to the front of the input list,
// and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element)
// or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

function arrayToList(arr) {
  let obj = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    obj = {
      value: arr[i],
      rest: Object.keys(obj).length ? obj : null,
    };
  }
  return obj;
}

// console.log(arrayToList([10, 20]));

function listToArray(list) {
  let arr = [];
  for (; list !== null; list = list.rest) {
    arr.push(list.value);
  }
  return arr;
}

// console.log(listToArray(arrayToList([10, 20, 30, 40])));

function prepend(value, rest) {
  let obj = {};
  obj.value = value;
  obj.rest = rest;
  return obj;
}

console.log(prepend(10, prepend(20, prepend(30, null))));

function nth(list, num) {
  let count = 0;
  let currentNum;

  for (; list !== null; list = list.rest) {
    count++;
    if (count === num) {
      currentNum = undefined ?? list.value;
      break;
    }
  }
  return currentNum;
}

console.log(nth(arrayToList([10, 20, 30]), 2));

// Task 4

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties,
// where the values of the properties are equal when compared with a recursive call to deepEqual.
// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;
  let propsInA = 0,
    propsInB = 0;
  for (let prop in a) propsInA += 1;
  for (let prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop])) return false;
  }
  return propsInA == propsInB;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
