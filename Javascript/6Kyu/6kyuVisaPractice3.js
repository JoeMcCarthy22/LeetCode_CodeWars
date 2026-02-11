/* 🧠 Intermediate Coding Question (Visa-style) Problem: Card Usage Cooldown

Visa needs to detect cards that are being used too frequently.
You are given a list of card transactions in chronological order.

Each transaction has:

{
  cardId: string,
  timestamp: number, // seconds since epoch
  status: 'APPROVED' | 'DECLINED'
}

Task
Write a function: function cardsInCooldown(transactions, cooldown)

Return an array of cardIds that have two APPROVED transactions within cooldown seconds of each other.
Rules
Only APPROVED transactions count
DECLINED transactions do nothing
If a card violates the cooldown rule at least once, include it once
Order of returned cardIds does not matter

Example
const transactions = [
  { cardId: 'A1', timestamp: 100, status: 'APPROVED' },
  { cardId: 'A1', timestamp: 130, status: 'APPROVED' },
  { cardId: 'A1', timestamp: 300, status: 'APPROVED' },
  { cardId: 'B2', timestamp: 200, status: 'DECLINED' },
  { cardId: 'B2', timestamp: 260, status: 'APPROVED' },
  { cardId: 'B2', timestamp: 310, status: 'APPROVED' },
];

cardsInCooldown(transactions, 60);
// ['A1', 'B2']

Constraints

1 ≤ transactions.length ≤ 100,000
Transactions are sorted by timestamp
Aim for O(n) time
Don’t mutate input


P: an array of transactions, cooldown time period (s)
R: an array of the cardID which have two approved transfers within the cooldown period
Ps: 
-use an object to store SuccTrans{}
-loop through transactions
-create a key for each cardid
-if i + 1 - i <= cooldown, push to a cooldown array
-return the array

*/

function cardsInCooldown(transactions, cooldown){

    let succTrans = {};
    let cooldownIds = [];

    for (let i = 0; i < transactions.length - 1; i++){

        let cardID = transactions[i].cardId;
        let timestamp = transactions[i].timestamp;
        let status = transactions[i].status;

        if (status !== 'APPROVED') continue;

        if (!succTrans[cardID]) succTrans[cardID] = timestamp;

        if (!cooldownIds.includes(succTrans[cardID]) && (succTrans[cardID] - succTrans[cardID[+1]] <= cooldown)){
            cooldownIds.push(succTrans[cardID])
        }
    }

}