/* Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.*/

/*
P: an integer
R: the total sum of internal angles (int)
E: n = 3, sum = 180..... n = 4, sum = 360
Ps:
- find the formula 
- (n - 2) * 180
- return
*/

function angle(n) {
    return (n - 2) * 180
  }