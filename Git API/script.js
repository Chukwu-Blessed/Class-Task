'use strict'

const searchBar = document.querySelector( '.search_bar' );
const searchBtn = document.querySelector( '.search_btn' );

const parentEl = document.querySelector('.search')

searchBtn.addEventListener( 'click', async function ()
{
  try
  {
    const response = await fetch( `https://api.github.com/users/${ searchBar.value }` );
    // console.log( response );
    const data = await response.json();
    // console.log( data );

    const markUp = `
        <div class="body_content">
          <div class="profile">
            <h1 class="user_name"> ${ data.name } </h1>
            <img class="user_profile_pic" src="${ data.avatar_url }" alt="user_profile_pic">
          </div>
          <div class="follow">
            <p class="followers"> Followers: ${ data.followers } </p>
            <p class="following"> Following: ${ data.following } </p>
          </div>
        </div>
      `;

    parentEl.insertAdjacentHTML( 'afterend', markUp )

    searchBar.value = '';
  } catch ( err )
  {
    console.error( err );
  }
} );
