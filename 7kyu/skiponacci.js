//Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". 


function skiponacci(n) {
    let nums = [1, 1];
    let result = [];

    for (let x = 2; n >= nums.length; x++) {
        let temp = nums[x - 1] + nums[x - 2];
        nums.push(temp);
    }
    for (let x = 0; x < nums.length; x++) {
        if (x % 2 == 0) {
            result.push(nums[x]);
        } else {
            result.push('skip');
        }
    }

    return result.slice(0, n).join(' ');
}


console.log(skiponacci(7)); //, "1 skip 2 skip 5 skip 13")
console.log(skiponacci(1)); //, "1")