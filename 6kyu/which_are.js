// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.


function inArray(array1,array2){
  let result = [];

  for (var x = 0; x < array1.length; x++) {
    for (var i = 0; i < array2.length; i++) {
      if (array2[i].includes(array1[x]) && !result.includes(array1[x])) {
        result.push(array1[x]);
      }
    }
  }
  return result.sort();
}



a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]

// console.log(inArray(a1, a2)); //, ["live", "strong"])

a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2)); //, ["arp", "live", "strong"])