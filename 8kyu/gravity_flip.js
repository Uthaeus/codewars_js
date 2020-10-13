// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.


const flip=(d, a)=>{
    return d == 'R' ? a.sort((m, n) => m - n) : a.sort((m, n) => n - m);
}


console.log(flip('L', [1, 4, 5, 3, 5])); //, [5, 5, 4, 3, 1])