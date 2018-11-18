// So BinaryPyramid ( 1 , 4 ) should return "1111010" Note: value returned should be in string format


function BinaryPyramid(m,n){
    let range = [], results = [];

    for (let x = m; x <= n; x++) {
        range.push(x);
    }
    for (let i = 0; i < range.length; i++) {
        let temp = range[i].toString(2);
        results.push(+temp);
    }
    let total = results.reduce((a, b) => a += b);
    return total.toString(2);
}



console.log(BinaryPyramid(1,4)); //, "1111010")