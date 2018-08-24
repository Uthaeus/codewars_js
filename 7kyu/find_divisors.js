// Find the number of divisors of a positive integer n.


function getDivisorsCnt(n){
    // todo
    let result = [];

    for (var i = n; i > 0; i--) {
      if (n % i === 0) {
        result.push(i);
      }
    }
    return result.length;
}



console.log(getDivisorsCnt(54)); // , 8)