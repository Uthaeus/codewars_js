// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.


function dup(s) {
    let result = [];
    for (let x = 0; x < s.length; x++) {
        let temp = "";
        for (let y = 0; y < s[x].length; y++) {
            let tempLetter = s[x][y];
            temp += tempLetter;

            let i = 1;
            while (tempLetter === s[x][y + i]) {
                y++;
                i++;
            }
        }
        result.push(temp);
    }
    return result;
};


console.log(dup(["abracadabra","allottee","assessee"])) //,['abracadabra','alote','asese']);)

console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"])); //, ['Wolomolo','flodoromonlighters','chuchchi']))