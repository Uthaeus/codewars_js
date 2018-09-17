// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.


function inArray(array1,array2){
  //...
  let result = [], inds = [];

  for (let i in array1) {
    for (var j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i]) && result.every(a => !a.includes(array1[i]))) {
        result.push([array1[i], array2[j]]);
      }
    }
  }

  result = result.sort((a, b) => a[1] - b[1]);

  console.log(result);

  result.sort((a, b) => {
    if (a[1].length == b[1].length) {
      return a[1] > b[1];
    } else {
      return a[1] - b[1];
    }
  });

  console.log(result);
  
  let final = result.map(a => a[0]);

  return final;
}



a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]

// console.log(inArray(a1, a2)); //, ["live", "strong"])

a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2)); //, ["arp", "live", "strong"])