'use strict'

const append = document.querySelector( 'div' );

const arr = [2, 3, 7, 4, 2];
const checkFirstAndLastValue = function ()
{
  if ( arr[ 0 ] === arr[ arr.length - 1 ] ) append.innerHTML = 'True';
  else append.innerHTML = 'False';
}