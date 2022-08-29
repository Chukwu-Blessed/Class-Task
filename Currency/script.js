// This is the root url for the Rest API
const baseUrl = "https://hacker-news.firebaseio.com/v0";
// This url makes sure the result is returned in JSON
const newStoriesUrl = `${baseUrl}/topstories.json`;
// This url makes can be modified to get a particular new
const itemUrl = `${baseUrl}/item/`;

// This is a config object for the fetch function
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

//   This request get the first 500 request
// fetch(newStoriesUrl, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));


//   This fetch get the post with an ID of 32494485
// fetch(itemUrl + "32494485" + ".json", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));




// const getComment = function () {
//   fetch(itemUrl + "32494485" + ".json", options)
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);
//     const html = `
//     <h1>${data.title}</h1>
//     <h2>${data.by}</h2>
//     <h3>${data.type}</h3>
//     <a target="_blank" href="${data.url}">Nocturnal bottleneck</a>
//   `

//   firstComment.insertAdjacentHTML('afterend', html);
//   })
//   .catch((err) => console.error(err));
// }

// // getComment();

// const getTopStories = function () {
//   fetch(newStoriesUrl, options)
//   .then(response => response.json())
//   .then(data => {
//     for(let i = 0; i < 50; i++) {
//       let id = data[i];
//       fetch(itemUrl + id + ".json", options)
//       .then((response) => response.json())
//       .then((newData) => {
//         console.log(newData);
//         const html = `
//         <h1>${newData.title}</h1>
//         <h2>${newData.by}</h2>
//         <h3>${newData.type}</h3>
//         <a target="_blank" href="${newData.url}">Click to read ${newData.id}</a>
//       `
    
//       firstComment.insertAdjacentHTML('afterend', html);
//       })
//       .catch((err) => console.error(err));
//     }
//   })
// }

// getTopStories();

// Assignment
/*
Make an app that goes to 
https://catfact.ninja/fact
Let the fetch function go to the API every 5 seconds, get a fact and append it to h1 tag on the html
*/ 

const firstComment = document.querySelector('.comment');
// sets a timer interval for 5seconds that make the code runs every 5seconds
const fiveSecInterval = setInterval(() => {
  // fetch Api from the passed in URL which returns a promise
  fetch('https://catfact.ninja/fact')
  // the then() keyword consumes the promise and converts the response ti json format which also returns another promise
  .then((data) => data.json())
  // this then() keyword consumes the resulting promise and executes the code in the block
  .then((data) => {
    // console.log(data);
    // creating an HTML tag that would be appended into the HTML file
    const html = `
    <h1>${data.fact}</h1>
  `
  // appends html file just after the parent element
  firstComment.insertAdjacentHTML('afterend', html);
  })
  .catch((err) => console.error(err));
}, 5000);
