// In this Kata, you will be given a series of times at which an alarm goes off. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.


function solve(arr){
    let largest = 0;

    if (arr.length == 1) {
        return "23:59";
    } 

    for (let x = 0; x < arr.length - 1; x++) {
        let hrDiff = 0, minDiff = 0;
        let [hr1, min1] = arr[x].split(':');
        let [hr2, min2] = arr[x + 1].split(':');
        hr2 = +hr2 - 1;
        if (+hr2 - 1 < 0) {
            hr2 = 23;
        }

        while (+hr1 != +hr2) {
            +hr1++
            if (+hr1 >= 24) {
                hr1 = 0;
            }
            hrDiff++;
            console.log(hrDiff);
        }
    }
}


console.log(solve(["14:51"])); //, "23:59")
console.log(solve(["23:00","04:22","18:05","06:24"])); //,"11:40")