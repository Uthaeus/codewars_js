// Given n substrings (n >= 2) in a string s our function pos_average will calculate the average percentage of positions that are the same between the (n * (n-1)) / 2 sets of substrings taken amongst the given n substrings. It can happen that some substrings are duplicate but since their ranks are not the same in s they are considered as different substrings.


function posAverage(s) {
    let strArr = s.replace(/\s/g, '').split(',');
    let count = 0;
    let total = strArr.length * strArr[0].length;
    for (let x = 0; x < strArr.length - 1; x++) {
        for (let i = 0; i < strArr[x].length; i++) {
            if (strArr[x][i] == strArr[x + 1][i]) {
                count++;
            }
        }
    }
    
    let result = (count / total) * 100;
    return result.toFixed(10);
}



console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"));
//, 26.6666666667)