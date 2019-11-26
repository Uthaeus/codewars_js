

function partsSums(ls) {
    let total = ls.length < 1 ? 0 : ls.reduce((a, b) => a + b);
    let result = [total];

    for (let x = 0; x < ls.length; x++) {
      total -= ls[x];
      result.push(total);
    }

    return result;
}



//console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]
console.log(partsSums([])); // [0]