// Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval


function f(n){
    if (n === +n && n % 1 == 0 && n > 0) {
        let result = [];
        for (let x = 0; x <= n; x++) {
            result.push(x);
        }
        return result.reduce((a, b) => a += b);
    }
    return false;
};


console.log(f('n')); //, false
console.log(f(300)); //, 45150
console.log(f(3.14)); //, false