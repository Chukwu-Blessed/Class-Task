'use strict'

const errorValueHandler = function (a, b) {
  if(typeof a === 'string') {
    throw new Error(`${a} is not a Number: Enter a Number`)
  }
  if(typeof b === 'string') {
    throw new Error(`${b} is not a Number: Enter a Number`)
  }
}

module.exports = errorValueHandler;
