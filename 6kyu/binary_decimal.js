// Convert a number to a binary coded decimal (BCD)


function toBcd(number){
    let result = [], neg = false;

    if (number < 0) {
        number = Math.abs(number);
        neg = true;
    }

    let nums = number.toString().split('').map(a => +a);

    for (var x = 0; x < nums.length; x++) {
        let temp = (nums[x]).toString(2);
        while (temp.length < 4) {
            temp = '0' + temp;
        }
        if (neg && x === 0) {
            temp = '-' + temp;
        }
        result.push(temp);
    }

    return result.join(' ');
}



console.log(toBcd(-10)); //, "-0001 0000")