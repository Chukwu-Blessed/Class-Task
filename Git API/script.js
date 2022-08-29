'use strict'

const parentEl = document.querySelector('body')

const userName = 'chriscrea8';

const getUser = async function ()
{
  try{
    const response = await fetch( `https://api.github.com/users/${userName}` );
    // console.log( response );
    const data = await response.json();
    // console.log( data );

    const markUp = `
      <h1> ${ data.name } </h1>
      <img src="${ data.avatar_url }" alt="user_profile_pic">
      <p> Followers: ${ data.followers } </p>
      <p> Following: ${ data.following } </p>
    `;

    parentEl.insertAdjacentHTML('beforebegin', markUp)
  }catch(err) {
    console.error(err);
  }
};

getUser();