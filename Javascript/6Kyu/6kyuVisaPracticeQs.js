/* Visa-style Intermediate Question (≈ Codewars 6 kyu)
Problem

You are given an array of transactions. Each transaction is an object with the following properties:

{
  id: number,
  amount: number,
  status: string
}

Statuses can be:
"SUCCESS"
"FAILED"
"PENDING"

Task
Write a function getSuccessfulTotal(transactions) that:

Filters out any transactions that are not "SUCCESS"
Returns the total amount of all successful transactions
If there are no successful transactions, return 0

Example
const transactions = [
  { id: 1, amount: 100, status: "SUCCESS" },
  { id: 2, amount: 50, status: "FAILED" },
  { id: 3, amount: 75, status: "SUCCESS" },
  { id: 4, amount: 20, status: "PENDING" }
];

getSuccessfulTotal(transactions); // 175

Constraints
transactions will always be an array
amount is always a number
The array may be empty

P: an array of transactions (objects)
R: filter out any non-successful transactions - and then return the amount of all successful transactions
Ps: - 
1) filter out all the unsuccessful transactions - nested loop? or just push the successful ones into their own array?
2) from the remaining transactions, add these to a total and return
filter and reduce

*/

function getSuccessfulTotal(transactions){
    let successfuls = transactions.filter(tx => tx.status === 'SUCCESS')
    return successfuls.reduce((acc, tx) => acc + tx.amount, 0)
}


/*

PROBLEM 2:

Practice Problem: Top Spenders
You have an array of transactions. Each transaction is an object like this:

{
  user: "Alice",
  amount: 50,
  status: "SUCCESS"
}


Write a function getTopSpenders(transactions, threshold) that:
Filters out only successful transactions.
Sums the total amount per user.
Returns an array of user names whose total spending is greater than or equal to the threshold.

Example:

const transactions = [
  { user: "Alice", amount: 50, status: "SUCCESS" },
  { user: "Bob", amount: 20, status: "FAILED" },
  { user: "Alice", amount: 70, status: "SUCCESS" },
  { user: "Bob", amount: 100, status: "SUCCESS" }
];

getTopSpenders(transactions, 100); // should return ["Alice", "Bob"]

P: an array of objects, and the threshold value
R: an Array of Names who spend over the threshold
Ps:
-filter out all the non successful transactions
-create an object to store each spenders total
-then reduce.() to calculate if the total meets the threshold
-if so, push to an array and return

*/

function getTopSpenders(transactions, threshold){

  let succs = transactions.filter(tx => tx.status === 'SUCCESS');

  let spendersTotal = {};

  for (let i = 0; i < succs.length; i++){
    let user = succs[i].user;
    let amount = succs[i].amount;

    if (!spendersTotal[user]) spendersTotal[user] = 0;

    spendersTotal[user] += amount;
  }

  let bigSpenders = [];

  for (let key in spendersTotal){
    if (spendersTotal[key] >= threshold){
      bigSpenders.push(key)
    }
  }

  return bigSpenders
}