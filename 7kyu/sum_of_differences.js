// In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.


function sumDifferencesBetweenProductsAndLCMs(pairs){
  //your code here
  let prods = [];
  let lcm = [];
  let result = [];
  for (let item in pairs) {
    prods.push(pairs[item].reduce((a, b) => a *= b));

    let larger = Math.max(...pairs[item]);
    let smaller = Math.min(...pairs[item]);

    console.log(larger);
    console.log(smaller);

    for (var i = larger; ; i += larger) {
      if (i == smaller || i % smaller == 0) {
        lcm.push(i);
        break;
      }
    }
  }
  for (var j = 0; j < prods.length; j++) {
    let temp = Math.abs(prods[j] - lcm[j]);
    result.push(temp);
  }
  return result.reduce((a, b) => a += b);
}



// console.log(sumDifferencesBetweenProductsAndLCMs([[20,50], [10,10], [50,20]])); //,1890
console.log(sumDifferencesBetweenProductsAndLCMs([[1,1], [0,0], [13,91]])); //,1092