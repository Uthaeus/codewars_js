// you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.


function solve(s){
    let nums = [];

    for (let x = 0; x < s.length; x++) {
        let temp = ''
        while (s.charCodeAt(x) >= 48 && s.charCodeAt(x) <= 57) {
            temp += s[x];
            x++;
        }
        nums.push(+temp);
    }
    return Math.max(...nums);
};


console.log(solve('f7g42g16hcu5')); //,42)
console.log(solve('gh12cdy695m1')); //,695)