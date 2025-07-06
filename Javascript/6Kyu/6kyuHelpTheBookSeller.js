/*
A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.

Task
You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).

Example
# the bookseller's stocklist:
"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

# list of categories: 
"A", "B", "C", "W"

# result:
"(A : 20) - (B : 114) - (C : 50) - (W : 0)"
Explanation:

category A: 20 books (ABART)
category B: 114 books = 25 (BKWRK) + 89 (BTSQZ)
category C: 50 books (CDXEF)
category W: 0 books
the parameters are the stocklist (books) and the list of categories
need to return the categories with each number of books as per the format
-define the categories using an object
-loop through the books
-use the first character for the category
-parse the quanitity after the space 
-add the quantity to the count
-return in the specified format e.g "(A : 20) - (B : 114) - (C : 50) - (W : 0)"

*/

function stockList(books, categories) {
  
  if (books.length === 0 || categories.length === 0){
    return ""
  }

  let counts = {};
  for (let cat of categories) {
    counts[cat] = 0;
  }
  
  for (let i = 0; i < books.length; i++){
    let bookCode = books[i];
    let cat = bookCode[0];
    let quantity = parseInt(books[i].split(' ')[1]);
    
    if (counts.hasOwnProperty(cat)){
      counts[cat] += quantity;
    }   
  };
  
  return categories.map(cat => `(${cat} : ${counts[cat]})`).join(' - ');
    

}