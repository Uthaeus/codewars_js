// You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

// Be careful about your timing!


function notPrimes(a,b){
  //..
  var numArr = [];

  for (var i = a; i < b; i++) {
    if (!isPrime(i) && consistOf(i)) {
      numArr.push(i);
    }
  }

  return numArr;
}


function isPrime(num) {
  if (num <= 1) return false;
  else if (num <= 3) return true;
  else if (num % 2 == 0 || num % 3 == 0) return false;
  var i = 5;
  while (i * i <= num) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
    i += 6;
  }
  return true
}


function consistOf(num) {
  var primes = '2357';

  var n = num.toString().split('').filter(x => !primes.includes(x));

  if (n.length > 0) {
    return false;
  } else { 
    return true;
  }
}

// console.log(consistOf(2700));
// console.log(consistOf(2722));


console.log(notPrimes(2700, 3000))
//, [2722, 2723, 2725, 2727, 2732, 2733, 2735, 2737, 2752, 2755, 2757, 2772, 2773, 2775])
console.log(notPrimes(2, 222))
//, [22, 25, 27, 32, 33, 35, 52, 55, 57, 72, 75, 77])




