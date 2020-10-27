// Build Tower by the following given argument:
// number of floors (integer and always greater than 0)


function towerBuilder(nFloors) {
    let nums = [1];
    let result = [];
    for (let x = 1; x < nFloors; x++) {
        nums[x] = nums[x - 1] + 2;
    }
    let max = nums[nums.length - 1]
    for (let x = 0; x < nums.length; x++) {
        let temp = '';
        let totalBlanks = max - nums[x];
        let blanks = Math.floor(totalBlanks / 2);
        for (let y = 0; y < blanks; y++) {
            temp += " ";
        }
        for (let y = 0; y < nums[x]; y++) {
            temp += '*';
        } 
        for (let y = 0; y < blanks; y++) {
            temp += ' ';
        }
        result.push(temp);
    }
    return result;
}


console.log(towerBuilder(3)); //, ["  *  "," *** ","*****"]