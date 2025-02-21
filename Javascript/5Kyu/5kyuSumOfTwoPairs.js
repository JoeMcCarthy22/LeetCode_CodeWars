/* Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

/*
P: array of ints and a single sum value
R: the first two values that add up to form the sum, or undefined if none add up
E: As above
Ps:

-loop through the array
-complement = (s - ints[i])
- if ints.includes(complement) or use a set and .has()
-return [ints[i], complement ]
- else return undefined
*/

function sumPairs(ints, s) {
  
    let seen = new Set();
    
    for (let i = 0; i < ints.length; i++){
        
      let complement = (s - ints[i]);

      if (seen.has(complement)){
        return [complement, ints[i]]
      } 
      
    seen.add(ints[i])
    }
    
    return undefined
  }