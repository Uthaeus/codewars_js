// Task :
// Given a List [] of n integers , find minimum mumber to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

function calcPrimes(max){
  var primes = [];
  for(var i=2; i<=max; i++){
      var isPrime = true; 
      for(var j=0; j<primes.length; j++){
          var p = primes[j];
          if( i % p === 0){
              //it is divisible by another prime, so it's not prime
              isPrime=false;
              break;
          }
          //you don't need to check primes bigger than sqrt(i)
          if(p*p > i)
              break;
       }
      if(isPrime)
          primes.push(i);
  }
  return primes;
}

function isPrime(value) {
  for(var i = 2; i < value; i++) {
      if(value % i === 0) {
          return false;
      }
  }
  return true;
}

function minimumNumber(numbers){
  //your code here
  const getPrimes = (n = 0) => {
    const primes = n < 2 ? [] : [2];

    for (let i = 3; i <= n; i += 2) {
    if (primes.every(x => i % x)) primes.push(i);
    }
    return primes;
  }
  var num = numbers.reduce(function(a, b) {
    return a += b;
  });

  // const numRange = function(arr, n) {
  //   for (var j = 2; j <= Math.sqrt(n); j++) {
  //     arr.push(j);
  //   }
  // }

  const isPrime = function(n) {
    var numRange = [];
    for (var j = 2; j <= Math.sqrt(n); j++) {
      numRange.push(j);
    } 
    for (var y = 0; y < numRange.length; y++) {
      if (n % numRange[y] == 0) {
        return false;
      }
    }
    return true
  }
  var primeArr = getPrimes(num);
  var result = false;
  var sprime = primeArr[primeArr.length - 1];
  var lprime = 0

  for (var k = 2; result == false; k += 2) {
    var temp = isPrime(sprime + k);
    if (temp) {
      lprime = sprime + k;
      result = true;
    }
  }

  if (sprime == num) {
    return 0;
  } else{
    return lprime - num;
  }

}



console.log(minimumNumber([50,39,49,6,17,28]))  //,2)
console.log(minimumNumber([2,12,8,4,6])) //,5))










