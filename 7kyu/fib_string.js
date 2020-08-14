// You will be given a number and your task is to return the nth fibonacci string. 


function solve(n){
    let init = ['0', '01', '010'];

    for (let x = 3; x <= n; x++) {
      let newTemp = init[init.length - 1] + init[init.length - 2];
      init.push(newTemp);
    }

    return init[n];
}


console.log(solve(2)); //,'010')
console.log(solve(5)); //,'0100101001001')