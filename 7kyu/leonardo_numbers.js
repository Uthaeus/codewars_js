// Return the first n Leonardo numbers as an array


L = (n , L0 , L1 , add) => {
  // return what you are told....
  let result = [L0, L1];

  while (result.length < n) {
    let minOne = result[result.length - 1];
    let minTwo = result[result.length - 2];
    result.push(minOne + minTwo + add);
  }
  return result;
}



console.log(L(5, 1, 1, 1)); //, [1, 1, 3, 5, 9])