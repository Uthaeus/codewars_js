// Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)

// The upper limit for A and B is 216, int.MaxValue or similar.

// For example, you can change 31 to 14 by flipping the 4th and 0th bit:



function convertBits(a, b){
  let first = a.toString(2).split('');
  let second = b.toString(2).split('');
  let bits = 0;
  let max = first.length >= second.length ? first.length : second.length;

  if (first.length < max) {
    while (first.length < max) {
      first.unshift('0');
    }
  }

  if (second.length < max) {
    while (second.length < max) {
      second.unshift('0');
    }
  }

  for (var i = 0; i < max; i++) {
    if (first[i] !== second[i]) {
      bits++;
    }
  }
  return bits;
}



console.log(convertBits(31,14)); //,2)