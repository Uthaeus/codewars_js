// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.


function countSmileys(arr) {
    let count = 0;
    for (var x = 0; x < arr.length; x++) {
        let temp = (/:\)|;\)|:D|;D|:-\)|:-D|;-\)|;-D|:~\)|:~D|;~\)|;~D/).test(arr[x]);
        if (temp) {
            count++;
        }
    }
    return count;
}



console.log(countSmileys([':)',':(',':D',':O',':;'])); //, 2)