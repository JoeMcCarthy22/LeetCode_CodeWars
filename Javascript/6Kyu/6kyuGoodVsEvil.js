/*Description
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:
Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:
Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
parameters are good, evil
Each parameter will be a string of multiple integers separated by a single space
good - Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
evil - Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
determine the side with the larger worth, return the appropriate statement - string

-split the input string and map to numbers
-create arrays for the good side and evil side and pair the race to their value
-then need to create a total score for good and evil
-loop through each input string, add the associated pair score to the total
-compare the totals, return the appropriate string
*/

function goodVsEvil(good, evil){
  
  let goodCounts = good.split(' ').map(Number);
  let evilCounts = evil.split(' ').map(Number);
  
  let goodWorth = [1, 2, 3, 3, 4, 10]; // order: Hobbits, Men, Elves, Dwarves, Eagles, Wizards
  let evilWorth = [1, 2, 2, 2, 3, 5, 10]; // order: Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards
  
  let goodTotal = 0;
  let evilTotal = 0;
  
  for (let i = 0; i < goodCounts.length; i++){
    goodTotal += goodCounts[i] * goodWorth[i];
  }
  
  for (let i = 0; i < evilCounts.length; i++){
    evilTotal += evilCounts[i] * evilWorth[i];
  }
  
  if (goodTotal > evilTotal){
    return "Battle Result: Good triumphs over Evil"
  } else if (goodTotal < evilTotal){
    return "Battle Result: Evil eradicates all trace of Good"
  } else { 
    return "Battle Result: No victor on this battle field"
    }; 
}
