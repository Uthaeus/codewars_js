// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates


function add(num1, num2) {
    let numArr1 = String(num1).split('').reverse();
    let numArr2 = String(num2).split('').reverse();
    let result = [];

    let ind = numArr1.length > numArr2.length ? numArr1.length : numArr2.length;

    for (let x = 0; x < ind; x++) {
        if(numArr)
        result.push(+numArr1[x] + +numArr2[x]);
    }
    console.log(result);
    return result.reverse().join('');
}


console.log(add(2, 11)); //, 13)

console.log(add(1222, 30277)); //, 31499)