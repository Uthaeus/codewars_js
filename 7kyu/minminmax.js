// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.


function minMinMax(array) {
  let sorted = array.sort((a, b) => {
    return a - b;
  });
  let min = sorted[0], max = sorted[sorted.length - 1];

  for (let x = 0; x < max; x++) {
    let temp = sorted[x] + 1;
    if (temp < sorted[x + 1]) {
      return [min, temp, max];
    }
  }
  return [min, sorted[1], max]
}



console.log(minMinMax([-1, 4, 5, -23, 24])); //, [-23, -22, 24])
console.log(minMinMax([2, -4, 8, -5, 9, 7])); //, [-5, -3, 9])