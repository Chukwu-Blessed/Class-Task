'use strict'

// const errorValueHandler = require('./errors');
// Function perform addition arithmetic
const add = function(a, b) {
  // errorValueHandler(a, b);
  // if(typeof a === 'string' || typeof b === 'string') {
    //   return new Error('Enter a Number')
    // }
  return a + b;
};

// Function perform division arithmetic
const divide = function(a, b) {
  // errorValueHandler(a, b);
  return a / b;
};

// Function perform subtraction arithmetic
const subtract = function(a, b) {
// errorValueHandler(a, b);
return a - b;
};

// Function perform multiplication arithmetic
const multiply = function(a, b) {
  // errorValueHandler(a, b);
  return a * b;
};

// module.exports = {
//   addition,
//   division,
//   subtraction,
//   multiplication,
// };

// console.log(addition('2', 3));