// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once ( ignore duplicates).


function minValue(values){
  //your code here
  let uniq = [];

  for (let val in values) {
    if (!uniq.includes(values[val])) {
      uniq.push(values[val]);
    }
  }
  let result = uniq.sort((a, b) => a - b).join('');

  return +result;
}



console.log(minValue([5, 7, 9, 5, 7])); //, 579)