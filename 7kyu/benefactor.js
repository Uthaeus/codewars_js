// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg


function newAvg(arr, newavg) {
    let arrSum = arr.reduce((a, b) => a += b);
    let total = newavg * (arr.length + 1);
    let result = Math.ceil(total - arrSum);
    
    if (result <= 0) {
        throw new Error('Error');
    } else {
        return result;
    }
}


console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90)); //, 628)