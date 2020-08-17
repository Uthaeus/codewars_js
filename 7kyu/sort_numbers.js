// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.


function solution(nums){
    if (nums && nums.length > 0) {
        return nums.sort((a, b) => a > b);
    } else {
        return [];
    }
}


console.log(solution([1, 2, 10, 50, 5]));
console.log(solution(null));