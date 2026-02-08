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

