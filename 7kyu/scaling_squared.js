// You are given a string of n lines, each substring being n characters long. For example:


function scale(strng, k, n) {
    if (strng.length < 1) {
        return '';
    }
    let strArr = strng.split('\n');
    let result = [];

    for (var x = 0; x < strArr.length; x++) {
        let items = strArr[x].split('');
        let temp = '';
        for (var i = 0; i < items.length; i++) {
            temp += items[i].repeat(k);
        }
        for (var y = 0; y < n; y++) {
            result.push(temp);
        }
    }
    return result.join('\n');
}



//console.log(scale("Kj\nSH", 1, 2)); //,"Kj\nKj\nSH\nSH")
console.log(scale("", 5, 5)); //, "")