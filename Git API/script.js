'use strict'

const searchBar = document.querySelector( '.search_bar' );
const searchBtn = document.querySelector( '.search_btn' );

const parentEl = document.querySelector('body')

searchBtn.addEventListener( 'click', async function ()
{
  try
  {
    const response = await fetch( `https://api.github.com/users/${ searchBar.value }` );
    // console.log( response );
    const data = await response.json();
    // console.log( data );

    const markUp = `
        <h1> ${ data.name } </h1>
        <img src="${ data.avatar_url }" alt="user_profile_pic">
        <p> Followers: ${ data.followers } </p>
        <p> Following: ${ data.following } </p>
      `;

    parentEl.insertAdjacentHTML( 'afterend', markUp )

    searchBar.value = '';
  } catch ( err )
  {
    console.error( err );
  }
} );
