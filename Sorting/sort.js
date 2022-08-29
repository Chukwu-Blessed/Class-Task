const arr = [ 3, 10, 1, 9, 2, -6, -10, 16, 11, -20, 30 ];
for(let i = 1; i < arr.length; i++) {
  for ( let j = 0; j < i; j++ )
  {
    if ( arr[ i ] > arr[ j ] )
    {
      let num = arr[ i ];
      arr[ i ] = arr[ j ];
      arr[ j ] = num
      // console.log( arr );
    }
  }
}
console.log( arr );