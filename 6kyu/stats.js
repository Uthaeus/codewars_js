// Your task is to return a string giving these 3 values. For the example given above, the string result will be


function stat(strg) {
    let arr = strg.split(', ');
    let times = [];

    for (var x = 0; x < arr.length; x++) {
        let numArr = arr[x].split('|');
        let time = (+numArr[0] * 3600) + (+numArr[1] * 60) * +numArr[2];
        times.push(time);
    }

    return times;
}



console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")); 
// "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")