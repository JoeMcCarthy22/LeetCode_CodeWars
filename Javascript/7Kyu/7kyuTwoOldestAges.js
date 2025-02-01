// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
    ages.sort((a, b) => b - a)
    return [ages[1], ages[0]]
  }
  