// You will be given 2 integers, the first will be n(balls numbered from 0 to n-1) and the second will be k. You will return the position of the ball numbered k after the rearrangement.


function solve(n,k){
  //..
  let nums = [];

  for (let x = 0; x < n; x++) {
    nums.push(x);
  }

  for (let i = 0; i < nums.length; i++) {
    let head = nums.slice(0, i);
    let body = nums.slice(i).reverse();
    nums = head.concat(body);
  }

  return nums.indexOf(k);
}



console.log(solve(20,8)); //,17)
console.log(solve(20,9)); //,19)