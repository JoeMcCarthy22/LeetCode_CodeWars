/* A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3 */

/*
P: three numbers, height, bounce, window
R: how many times the Mum will see 
E: as above 
Ps:
- handle edge the cases
- the ball bounces to b of drop height (repeatedly)
- establish a counter for Mums views if the height exceeds the window
- return views count
- if 
*/

function bouncingBall(h,  bounce,  window) {
  
    // handle edge cases
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
    
    let ballSightings = 1;
    
    while (h * bounce > window){
      h *= bounce;
      ballSightings += 2
    }
    
    return ballSightings
    
  }