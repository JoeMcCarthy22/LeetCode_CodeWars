/*
Let's Recylcle!

You will be given a list of objects. Each object has type, material, and possibly secondMaterial. 
The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), 
by listing the type's of objects that should go into those bins.

Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list

Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]


Params is a list of objects
Return: an array containing each bin, which is an array of all the sorted items (an array with 4 sub arrays)
Ex as above
Ps:

create a result array
create each bin

loop through the input array;
if material === 'bin' then push the type to the relevant bin
do the same for second material

then once all inputs have been processed, push each bin to result in the correct order and return



*/


function recycle(array) {
  // create the master array
  let result = [];
  
  // create the bins
  let paper = [];
  let glass = [];
  let organic = [];
  let plastic = [];
  
  // process the inputs
  for (let i = 0; i < array.length; i++){
    let object = array[i];
    
    // primary materials
    if (object.material === 'paper'){
      paper.push(object.type)
    } else if (object.material === 'glass'){
      glass.push(object.type)
    } else if (object.material === 'organic'){
      organic.push(object.type)
    } else if (object.material === 'plastic'){
      plastic.push(object.type)
    };
      
    // secondary materials
      if (object.secondMaterial === 'paper'){
      paper.push(object.type)
    } else if (object.secondMaterial === 'glass'){
      glass.push(object.type)
    } else if (object.secondMaterial === 'organic'){
      organic.push(object.type)
    } else if (object.secondMaterial === 'plastic'){
      plastic.push(object.type)
    }};
 
  // now inputs are processed and bins are filled, time to return in order within the master array
  result.push(paper, glass, organic, plastic);
  return result
      
}    
    