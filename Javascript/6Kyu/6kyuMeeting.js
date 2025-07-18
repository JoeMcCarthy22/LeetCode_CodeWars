/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.

Notes
You can see another examples in the "Sample tests".
list input is a string - names are seperated by ;
need to return the list aplhabetically sorted by surname then first name if needed
e.g (CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)

-
-split and upper case the string into an array of people by .toUpperCase().split(';')
-this leaves e.g [FRED:CORWILL, BARNEY:TORBULL]
-next to do is to reverse the names so surname first
-use .map( name => name.split(':');
                   name = `(${name[1]} + ', ' + ${name[0]})`` 

- now the names are reversed and look like this [(CORWILL, FRED), (TORBULL, BARNEY)]
- need to sort alphabetically and then .join() and return
-.sort(a-b = a - b)

*/

function meeting(s) {
    let arr = s.toUpperCase().split(';');
    
    let formatted = arr.map(name => {
                const parts = name.split(':');
                return `(${parts[1]}, ${parts[0]})`;
                });

  
  return formatted.sort().join('')

  
}