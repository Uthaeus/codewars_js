// Complete the function that takes 2 arguments: a number (n), and a list of numbers (arr). The function should return a list of all the numbers in arr that are relatively prime to n. All numbers in will be positive integers.


function relativelyPrime(n,l){
  //your code here
  let nArr = [];
  let result = [];

  if (l.length < 1) {
    return result;
  }

  for (var i = 2; i <= n; ) {
    if (n % i === 0) {
      nArr.push(i);
      n /= i;
    } else {
      i++;
    }
  }

  for (let num in l) {
    let flag = false;
    for (let item in nArr) {
      if (l[num] % nArr[item] === 0) {
        flag = true;
      }
    }
    if (flag === false) {
      result.push(l[num]);
    }
  }

  return result;
}



console.log(relativelyPrime(8, [1,2,3,4,5,6,7])); //, [1,3,5,7])