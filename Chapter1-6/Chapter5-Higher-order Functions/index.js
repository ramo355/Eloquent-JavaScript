// Task 1
// Flattening
// Use the reduce method in combination with the concat method to “flatten”
// an array of arrays into a single array that has all the elements of the original arrays.
// → [1, 2, 3, 4, 5, 6]

function flatten(array) {
  return array.reduce((a, b) => {
    return a.concat(b);
  }, []);
}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays));

// Task 2
// Your own loop
// Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function.
// Each iteration, it first runs the test function on the current loop value and stops if that returns false.
// Then it calls the body function, giving it the current value.
// Finally, it calls the update function to create a new value and starts from the beginning.

// When defining the function, you can use a regular loop to do the actual looping.

// Your code here.

// loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
function test(n) {
  return n > 0;
}

function body(value) {
  console.log(value);
}

function update(n) {
  return n - 1;
}
function loop(value, testFn, updateFn, bodyOfFn) {
  for (let i = value; ; i = updateFn(i)) {
    if (!testFn(i)) {
      break;
    }
    bodyOfFn(i);
  }
}

console.log(loop(3, test, update, body));

// Task 3
// Everything
// Analogous to the some method, arrays also have an every method.
//  This one returns true when the given function returns true for every element in the array.
//   In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

// Implement every as a function that takes an array and a predicate function as parameters.
//  Write two versions, one using a loop and one using the some method.

function every(array, test) {
  // 1) using loop
  //   for (let i = 0; i < array.length; i++) {
  //     if (!test(array[i])) {
  //       return false;
  //     }
  //   }
  //   return true;
  //2) using method some()
  return !array.some((el) => !test(el));
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// // → false
console.log(every([], (n) => n < 10));
// → true

// Task 4

// Dominant writing direction
// Write a function that computes the dominant writing direction in a string of text.
// Remember that each script object has a direction property that can be "ltr" (left to right),
// "rtl" (right to left), or "ttb" (top to bottom).

// The dominant direction is the direction of a majority of the characters that have a script associated with them.
// The characterScript and countBy functions defined earlier in the chapter are probably useful here.

function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
