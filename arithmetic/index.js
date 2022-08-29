'use strict'

const errorValueHandler = require('./errors');
// Function perform addition arithmetic
const addition = function(a, b) {
  errorValueHandler(a, b);
  // if(typeof a === 'string' || typeof b === 'string') {
    //   return new Error('Enter a Number')
    // }
  return a + b;
};

// Function perform division arithmetic
const division = function(a, b) {
  errorValueHandler(a, b);
  return a / b;
};

// Function perform subtraction arithmetic
const subtraction = function(a, b) {
errorValueHandler(a, b);
return a - b;
};

// Function perform multiplication arithmetic
const multiplication = function(a, b) {
  errorValueHandler(a, b);
  return a * b;
};

module.exports = {
  addition,
  division,
  subtraction,
  multiplication,
};

// console.log(addition('2', 3));