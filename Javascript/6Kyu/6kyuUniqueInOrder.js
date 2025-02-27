/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

/*
P: a string or array
R: an array of the input, without any elements with the same value next to each other
E: As above
Ps:
- need to convert string to array - use an if statement
- create a result array
- loop through the input array
- if input[i] !== input[i+1] then push to result array OR check to see if the last element in result == input[i] if so do not push
- return the result array
*/


var uniqueInOrder=function(iterable){
  
    // ensure iterable is an array
    if (typeof iterable === "string"){
      iterable = iterable.split('');
    }
    
    let result = [];
    
    for (let i = 0; i < iterable.length; i++){
      if (result[result.length-1] !== iterable[i]){
        result.push(iterable[i])
      }
    }
    
    return result
  }