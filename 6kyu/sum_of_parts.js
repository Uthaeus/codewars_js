

function partsSums(ls) {
    let result = [];

    for (let x = 0; x <= ls.length; x++) {
      let temp = 0;

      for (let y = x; y < ls.length; y++) {
        temp += ls[y];
      }
      result.push(temp);
    }

    return result;
}



console.log(partsSums([0, 1, 3, 6, 10])); // [20, 20, 19, 16, 10, 0]