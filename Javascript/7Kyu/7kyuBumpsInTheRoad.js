/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
parameter is a string showing flat road "_" or bumps "n"
return "Woohoo!" if 15 bumps or less, else "Car Dead"
-establish a bump counter
-loop through x
-conditionals
*/

function bump(x){
  let bumpCount = 0;
  for (let i = 0; i < x.length; i++){
    if (x[i] === 'n'){
      bumpCount++;
    }
  }
  
  return bumpCount <= 15 ? "Woohoo!" : "Car Dead"

}