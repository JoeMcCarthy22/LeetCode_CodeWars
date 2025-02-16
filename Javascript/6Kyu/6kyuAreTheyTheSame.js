/* Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

P: two arrays
R: True if both arrays contain the same elements with the same multiplicities
E: as above
Ps: 
-handle edge cases such as null + arrays of different lengths
- sort both arrays in asc order
- use a loop
- a1[i]**2 == a2[i] otherwise return false
*/


function comp(array1, array2){
  
    // handle edge cases
    if (array1 == null || array2 == null) return false;
    if (array1.length !== array2.length) return false;
    
    // sort and use a loop to compare the arrays
    
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    
    for (let i = 0; i < array1.length; i++){
          if (array1[i] ** 2 !== array2[i]){
            return false
          }
        }
    
    return true 
   } 
  
    