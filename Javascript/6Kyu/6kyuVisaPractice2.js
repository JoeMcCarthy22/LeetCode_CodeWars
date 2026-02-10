/* 🧠 Intermediate Coding Question (Visa-style) Problem: Fraud-Sensitive Spending Window

Visa processes millions of transactions per day. You are given a list of transactions in chronological order.

Each transaction has:

{
  user: string,
  amount: number,
  status: 'SUCCESS' | 'FAILED'
}

Task
Write a function:
function flaggedUsers(transactions, limit)
Return an array of user IDs who have any consecutive sequence of successful transactions whose total amount exceeds limit.

Rules
Only consecutive SUCCESS transactions count
A FAILED transaction breaks the sequence
If a user exceeds the limit at least once, include them once
Order of returned users does not matter

Example
const transactions = [
  { user: 'alice', amount: 40, status: 'SUCCESS' },
  { user: 'alice', amount: 30, status: 'SUCCESS' },
  { user: 'alice', amount: 50, status: 'FAILED' },
  { user: 'alice', amount: 60, status: 'SUCCESS' },
  { user: 'bob',   amount: 70, status: 'SUCCESS' },
  { user: 'bob',   amount: 40, status: 'SUCCESS' },
];

flaggedUsers(transactions, 100);
// ['alice', 'bob']


Why?

Alice: 40 + 30 = 70 (no), but later 60 alone is fine → not flagged there
However if threshold were 50, she'd be flagged

Bob: 70 + 40 = 110 → flagged

Constraints (very HackerRank)
1 ≤ transactions.length ≤ 100,000
Amounts are positive integers
Aim for O(n) time
Don’t mutate input 

P: Am array of users and transactions, and a spending limit
R: an array of users who have consecutive successful transactions that exceed the limit
Ps:

-create an object to store consec successful totals in (conSucc)
=let conSucc = {}

-loop through input transactions
-let user = transactions.user
-let amount "
-let status
-if (!conSucc[user]) conSucc[user] = 0;




*/

function flaggedUsers(transactions, limit){

    let conSucc = {};
    let flaggedArray = [];

    for (let i = 0; i < transactions.length; i++){

        let user = transactions[i].user;
        let amount = transactions[i].amount;
        let status = transactions[i].status;

        if (!conSucc[user]) conSucc[user] = 0;

        if (status == 'SUCCESS'){
            conSucc[user] += amount;
            if (conSucc[user] > limit && !flaggedArray.includes(user)) flaggedArray.push(user);
        } else if (status == 'FAILED'){
            conSucc[user] = 0;
        }
        
    }

    return flaggedArray;

}