// You need to design a recursive function called replicate which will receive arguments times and number


function replicate(times, number) {
  let result = [];
  if (times > 0) {
    result.push(number);
    times--;
    replicate(times, number);
  } else {
    return result;
  }
}



console.log(replicate(5,1)); //, [1, 1, 1, 1, 1])
console.log(replicate(-1,12)); //, [])