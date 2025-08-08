/*
xIf you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}

P: signature which is an array of x length numbers && n is the number of elements to return

-establish the window size
-use a while loop while signature.length < n
-push the next number to the signature
-use slice (-windowSize) and then reduce to calculate next number

*/

function Xbonacci(signature, n){

    let windowSize = signature.length;

    if (n <= windowSize) return signature.slice(0, n)

    while (signature.length < n){
        nextNum = signature.slice(-windowSize).reduce((acc, c) => acc + c, 0);
        signature.push(nextNum)
    }

    return signature


}