'use strict'

const htmlFile = document.querySelector('.append');

for(let i = 1; i <= 15; i++) {
  // const evenOrOdd = i % 2 === 0 ? `${i} is Even` : `${i} is Odd`;

  const html = `
    <h1> ${i % 2 === 0 ? `${i} is Even` : `${i} is Odd`} </h1>
  `

  // appending html tag into the html file before the parent root tag
  htmlFile.insertAdjacentHTML('beforeend', html);
}