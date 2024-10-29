/* Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john" */

function nameShuffler(str){
    str = str.split(" ")
    let joined = str[1] + " " + str[0]
    return joined
   }