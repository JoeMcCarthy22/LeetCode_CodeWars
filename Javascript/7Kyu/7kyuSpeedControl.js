/*
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

Note
With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

 (3600 * delta_distance) / s.

Happy coding!

Params are
s = seconds 
x = the distance travelled from the orgign - x is an array

Return: the floor of the maximum average speed per hour of x

PS:
-create an average speed array

*/


function gps(s, x) {
  
  if (x.length <= 1) return 0;
  
  let averageSpeeds = [];
  
  for (let i = 1;i < x.length; i++){
      let deltaDistance = x[i] - x[i-1];
      averageSpeeds.push(deltaDistance * 3600 / s)
    }
  
  
  return   Math.floor(averageSpeeds.sort((a, b) => (b - a))[0])
  
  
}
