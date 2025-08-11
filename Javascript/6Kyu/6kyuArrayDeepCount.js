/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7

parameter is an array that can include nested arrays
return the number of all elements in all arrays
example as above
-establish a count = 0;;
-use recursion?
-loop through input
-if el !== array, then add to count. 
if == array, then need to recursively loop through the element
return the count
*/

function deepCount(a){

    let count = 0;

    function arrayCounter(el){
        for (let i = 0; i < el.length; i++){
            count++;
            if (Array.isArray(el[i])){
                arrayCounter(el[i]);
            }
        }
    }

    arrayCounter(a)

    return count


}