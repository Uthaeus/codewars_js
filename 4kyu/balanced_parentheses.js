// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses


function balancedParens(n) {
  let parens = [];

  for (var i = 0; i < n; i++) {
    parens = parens.concat(['(', ')']);
  }

  return parens;
}

const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}



console.log(permutator(balancedParens(2)))//.sort()); //, ["(())","()()"]