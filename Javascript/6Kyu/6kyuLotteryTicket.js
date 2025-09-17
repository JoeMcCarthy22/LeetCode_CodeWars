/*
Time to win the lottery!!

Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

Example ticket:

[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

All inputs will be in the correct format. Strings on tickets are not always the same length.

parameter is an array of 2-value arrays, and the total score req to win
If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
example ticket [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
to get a mini win per subarray, if the charCode of any of the chars in the string matches the number, this is a mini win

-let score = 0;
-loop through the array + nestedloop
-check for mini win, if so add to total score
-check if score >= win

*/


function bingo(ticket, win){
  
  let score = 0;
  
  for (let i = 0; i < ticket.length; i++){
    let str = ticket[i][0];
    let num = ticket[i][1];
    
    for (let j = 0; j < str.length; j++){
      let char = str[j];
      char = char.charCodeAt(0);
      if (char === num){
        score ++;
        break
      }
    }  
  }
  
  return score >= win ? 'Winner!' : 'Loser!'
  
  

}