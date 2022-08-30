# First And Last Value

This file contains a simple Algorithm that check if the first value and last value of any array is equal to each other.
This algorithm uses just the if else() conditional statement to check if both values are thesame.

## How it works
The trick behind this simple algorithm is to check if the first value of the array at any point in time is equal to the last value of the array. 
The last value in this case is gotten from deducting 1(one) from the length of the entire array and setting the result as the index of the array, thereby getting the index of the last value of the array at any given point in time.

```
array[array.length - 1]; 
```
This gives the index of the last value of the array at any point in time.
