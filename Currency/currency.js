'use strict'

// 2. Next create an API for a currency app
// https://api.coindesk.com/v1/bpi/currentprice.json
// Let the fetch function go to the API every 5 seconds, get the currency exchange and append the important details to the html
// Do this inside a new file called currency.html

const getCurrency = document.querySelector('.curr');
setTimeout(() => {
  fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => {
      // console.log(data.bpi);
      for(const [_, value] of Object.entries(data.bpi)) {
        // console.log(`${value.code}`)
        const html = `
          <h1>Currency: ${value.code}  _Rate: ${value.rate} </h1>
        `
        getCurrency.insertAdjacentHTML('afterend', html);
      }
    })
    .catch(err => console.error(err))
}, 0);


// async function that fetch the API when it is called
const getAllCurrency = async function() {

  try{
    // Awaits for the response from the fetched api call and consumes promises returened
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    // awaits for th eresponse and only proceeds once it is resolved and converts the response to a json format
    const data = await response.json();
    // console.log(data)
    // loops over the returned object and returns their values and keys
    for(const [_, value] of Object.entries(data.bpi)) {
       // creating an HTML tag that would be appended into the HTML file
      const html = `
        <h1>Currency: ${value.code}  _Rate: ${value.rate} </h1>
      `
      // appends html file just after the parent element
      getCurrency.insertAdjacentHTML('afterend', html);
    }
    // catches errors from the api fetch
  }catch(e) {
    console.error(e)
  }
}
// call the getallcurrency function
getAllCurrency();