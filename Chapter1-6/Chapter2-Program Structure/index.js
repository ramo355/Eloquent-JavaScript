// Task 1
// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
function drawTriangle() {
  let str = "";
  for (let i = 0; i <= 7; i++) {
    str += "#";
    console.log(str);
  }
}

drawTriangle();

// Task 2
// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates.
// So if you solved it, your labor market value just went up.)

function printNumbers(a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log("Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

printNumbers(1, 100);

// Task 3
// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size,
// outputting a grid of the given width and height.

function drawChessboard(n) {
  let str = "";

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      str += "#";
    } else {
      str += " ";
    }
  }

  for (let j = 0; j < n; j++) {
    if (j % 2 == 0) {
      console.log(str.split("").reverse().join(""), "str");
    } else {
      console.log(str, "sss");
    }
  }
}

drawChessboard(8);
