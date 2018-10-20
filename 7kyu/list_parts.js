// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.


function partlist(arr) {
    result = [];

    for (var i = 0; i < arr.length - 1; i++) {
        let first = arr.slice(0, i + 1).join(' ');
        let last = arr.slice(i + 1, arr.length).join(' ');
        let temp = [first, last];
        result.push(temp);
    }
    return result;
}



console.log(partlist(["I", "wish", "I", "hadn't", "come"]))
// [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])