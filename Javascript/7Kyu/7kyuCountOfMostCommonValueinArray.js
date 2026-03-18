/*


Community
Leaderboards
Achieve honor and move up the global leaderboards
Chat
Join our Discord server and chat with your fellow code warriors
Discussions
View our Github Discussions board to discuss general Codewars topics
About
Docs
Learn about all of the different aspects of Codewars
Blog
Read the latest news from Codewars and the community
JoeMcCarthy22 Avatar
4 kyu
1,246
7 kyu
Find Count of Most Frequent Item in an Array
2228291% of 1,2904,242 of 14,883Fosna
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
P: an array of integers
R: the count of the most frequent item 

Ps
use a hashmap
loop through the collection
if collection[i] = hash, count++




*/


function mostFrequentItemCount(collection) {
  
  if (collection.length == 0) return 0
  
  let counts = {};
  
  for (let i = 0; i < collection.length; i++){
    
    let num = collection[i];
    if (!counts[num]){
      counts[num] = 1;
    } else {
      counts[num] ++;
    }
  }
  
  let max = 0;
  
  for (let key in counts){
    let value = counts[key];
    if (value > max){
      max = value
    }
  }
  
  return max
  
  
  
}