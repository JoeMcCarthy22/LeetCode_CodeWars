/* 70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?*/

/**
 * @param {number} n
 * @return {number}

paramaeter = n, the number of steps to reach the top, 1 <= n <= 45
return the number of ways you can climb the steps, either taking 2 or 1 steps at a time
example
n = 1, output = 1
n = 2, output = 2
n = 3, output = 3
n = 4, output (4x1, 2x2, 1+1+2, 1+2+1, 2+1+1) = 5
n = 5, ouput (5x1, 221, 212, 122, 1112, 1121, 1211, 2111) = 8
n = 6, output (1x6, 11112, 11121, 11211, 12111, 21111, 222, 2211, 2121, 1122, 1212) = 11

output increases fibonacci

fib output = n (-1) + n (-2)
 */
var climbStairs = function(n) {

    if (n == 0 || n == 1){
        return 1;
    } else if (n == 2){
        return 2
    };

    return climbStairs(n - 1) + climbStairs(n - 2);
    
};