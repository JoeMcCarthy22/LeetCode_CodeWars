/* There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times
*/

/*
P: number of customers + taken to check out, numnber of tills
R: total time req for all customers to check out
E: as above
Ps:
Start with an array that has n elements, each representing a till. Initialize all to 0 (because they're all free at the start).
As each customer goes through the queue:
Assign them to the till that becomes available the soonest (i.e., the one with the smallest total time).
Add the customer's time to that till’s total.
*/

function queueTime(customers, n) {
  
    let tills = new Array(n).fill(0);
    
    for (let i = 0; i < customers.length; i++){
      let index = tills.indexOf(Math.min(...tills));
      tills[index] += customers[i]
    }
    
    return Math.max(...tills);
  
  
  }