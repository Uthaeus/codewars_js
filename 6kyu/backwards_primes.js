// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.


function backwardsPrime(start, stop){
    let result = [];

    for (let x = start; x <= stop; x++) {
        if (x > 9) {
            rev = +x.toString().split('').reverse().join('');
            if (x !== rev && isPrime(x) && isPrime(rev)) {
                result.push(x);
            }
        }
    }
    return result;
}

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num !== 1 && num !== 0;
}



console.log(backwardsPrime(9900, 10000)); 
// [9923, 9931, 9941, 9967]
console.log(backwardsPrime(2, 100)); 
// [13, 17, 31, 37, 71, 73, 79, 97] 