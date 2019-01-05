// Given an array of numbers, return a string made up of four parts:


function sortTransform(a){
    let result = [];

    for (var x = 0; x < 4; x++) {
        let tempResult = "";
        if (x === 0) {
            let temp = a.slice(0, 2).concat(a.slice(a.length - 2));
            for (var i = 0; i < temp.length; i++) {
                tempResult += String.fromCharCode(temp[i]);
            }
        } else if (x === 1) {
            let sorted = a.sort((a, b) => a > b);
            let temp = sorted.slice(0, 2).concat(sorted.slice(sorted.length - 2));
            for (var i = 0; i < temp.length; i++) {
                tempResult += String.fromCharCode(temp[i]);
            }
        } else if (x === 2) {
            let sorted = a.sort((a, b) => b > a);
            let temp = sorted.slice(0, 2).concat(sorted.slice(sorted.length - 2));
            for (var i = 0; i < temp.length; i++) {
                tempResult += String.fromCharCode(temp[i]);
            }
        } else if (x === 3) {
            let chars = a.map(a => String.fromCharCode(a)).sort();
            let temp = chars.slice(0, 2).concat(chars.slice(chars.length - 2));
            for (var i = 0; i < temp.length; i++) {
                tempResult += temp[i];
            }
        }
        result.push(tempResult);
    }
    return result
}



console.log(sortTransform([121, 122, 123, 124, 125, 120, 122, 132])); //, 'yzz-xy}-}yx-xy}')