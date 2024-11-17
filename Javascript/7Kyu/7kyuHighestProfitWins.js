/* Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array. */

function minMax(arr){
    // make another array to push min/max into
    let array2 = [];
    // sort the input array in order
    arr = arr.sort((a, b) => a - b);
    // push index0 and index last into array 2
    array2.push(arr[0], arr[arr.length-1])
    return array2
  }
  
  /*
  P: an array 
  R: [min, max]
  E: [1,2,3,4,5] --> [1,5]
  P: 
  
  make another array to push min/max into
  
  sort the original array
  
  push the first and last elements into the new array and return it
  
  */