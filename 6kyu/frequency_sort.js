// In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value


function solve(arr){
  let result = [];
  let obj = {};

  for (let x = 0; x < arr.length; x++) {
    if (obj[arr[x]]) {
      obj[arr[x]]++;
    } else {
      obj[arr[x]] = 1;
    }
  }

  for (let prop in obj) {
    let temp = [];
    for (let x = 0; x < obj[+prop]; x++) {
      temp.push(+prop);
    }
    result.push(temp);
  }
  console.log(result);
  result = result.sort((a, b) => a[0] > b[0]);
  console.log(result);
  result = result.sort((a, b) => a.length < b.length).join(',');
  console.log(result);
  
  return result.split(',').map(a => +a);
}


console.log(solve([2,3,5,3,7,9,5,3,7])); //,[3,3,3,5,5,7,7,2,9])