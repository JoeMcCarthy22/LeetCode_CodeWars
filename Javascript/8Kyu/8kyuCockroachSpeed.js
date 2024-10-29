/* The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer. */

function cockroachSpeed(s) {
    // convert from km per hour to km per second
    s = s / 3600
    // convert from km per second to cm per second
    s = s * 100000
    return Math.floor(s)
  }