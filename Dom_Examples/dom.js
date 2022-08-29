'use strict'

const inputField1 = document.querySelector('.text_area');
const inputField2 = document.querySelector('.second_txt_area');
const sumBtn = document.querySelector('.calc_btn');
const summation = document.querySelector('.answer');
const pError = document.querySelector('.error');
const arithmetic = document.querySelector('.arithmetic');

let arr = ['', ''];

inputField1.addEventListener('keyup', () => {
  arr[0] = +inputField1.value;
  pError.innerHTML = '';
});

inputField2.addEventListener('keyup', () => {
  arr[1] = +inputField2.value;
  pError.innerHTML = '';
});

sumBtn.addEventListener('click', () => {

  if(isNaN(arr[0])) {
    pError.innerHTML = 'First Value is not a Number';
    summation.innerHTML = '';
    return;
  };

  if(isNaN(arr[1])) {
    pError.innerHTML = 'Second Value is not a Number';
    summation.innerHTML = '';
    // setTimeout(() => {
    //   pError.innerHTML = '';
    // }, 5000);
    return;
  };
  
  switch(arithmetic.value) {    
    case '+':
      summation.innerHTML = add(arr[0], arr[1]);
      break;

    case '-':
      summation.innerHTML = subtract(arr[0], arr[1])
      break;

    case '/':
      summation.innerHTML = divide(arr[0], arr[1])
      break;

    case '*':
      summation.innerHTML = multiply(arr[0], arr[1])
      break;

    default:
      pError.innerHTML = 'Enter a Number';
      summation.innerHTML = '';
      break;
  }

  // arithmetic.addEventListener('change', function() {
  // })
});
