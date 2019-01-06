// Your task is to return a string giving these 3 values. For the example given above, the string result will be


function stat(strg) {
    let arr = strg.split(', ');
    let times = [];

    for (var x = 0; x < arr.length; x++) {
        let numArr = arr[x].split('|');
        let time = (+numArr[0] * 3600) + (+numArr[1] * 60) + +numArr[2];
        times.push(time);
    }

    let range = Math.max(...times) - Math.min(...times);
    let avg = Math.round(times.reduce((a, b) => a += b) / times.length);
    let median;
    times = times.sort((a, b) => a < b);
    if (times.length % 2 === 0) {
        let mid = times.length / 2;
        median = (times[mid] + times[mid - 1]) / 2;
    } else {
        let mid = Math.floor(times.length / 2);
        median = times[mid];
    }
    console.log(times);
    function format(t) {

        let hrs = Math.floor(t / 3600);
        if (hrs < 10) {
            hrs = '0' + hrs.toString();
        }
        t -= hrs * 3600;
        let min = Math.floor(t / 60);
        if (min < 10) {
            min = '0' + min.toString();
        }
        t -= min * 60;
        if (t < 10) {
            t = '0' + t.toString();
        }
        return `${hrs}|${min}|${t}`;
    }
    
    return `Range: ${format(range)} Average: ${format(avg)} Median: ${format(median)}`;
}



console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")); 
// "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34")

console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41")); 
//"Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"))