// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false


function scramble(str1, str2) {
    let result = [], obj1 = {}, obj2 = {};

    for (var x = 0; x < str1.length; x++) {
        if (obj1[str1[x]]) {
            obj1[str1[x]]++;
        } else {
            obj1[str1[x]] = 1;
        }
    }
    for (var x = 0; x < str2.length; x++) {
        if (obj2[str2[x]]) {
            obj2[str2[x]]++;
        } else {
            obj2[str2[x]] = 1;
        }
    }
    for (let item in obj2) {
        result.push(obj1[item] >= obj2[item]);
    }
    return result.every(a => a === true);
}



console.log(scramble('cedewaraaossoqqyt','codewars')); //,true)