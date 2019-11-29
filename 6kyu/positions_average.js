// Given n substrings (n >= 2) in a string s our function pos_average will calculate the average percentage of positions that are the same between the (n * (n-1)) / 2 sets of substrings taken amongst the given n substrings. It can happen that some substrings are duplicate but since their ranks are not the same in s they are considered as different substrings.


function posAverage(s) {
    let strArr = s.split(', ');
    let count = 0;

    for (let x = 0; x < strArr[0].length; x++) {

        let y = 0;
        while (y < strArr.length - 1) {
            if (strArr[y][x] == strArr[y + 1][x]) {
                count++;
            }
            y++;
        }
    }
    let total = strArr[0].length * strArr.length;
    let result = (count / total) * 100;

    console.log(count, total);
    console.log(result);

    return result.toFixed(10);
}



//console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"));
//, 26.6666666667)

console.log(posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"))
// 29.2592592593