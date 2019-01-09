// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.


function sumFracts(l) {
    let ds = [], ns = [], multiplier;
    
    for (var x = 0; x < l.length; x++) {
        ds.push(l[x][1]);
        ns.push(l[x][0]);
    }
    let minD = Math.min(...ds);

    for (var x = 1; ; x++) {
        if (ds.every(a => (minD * x) % a === 0)) {
            multiplier = x;
            minD *= multiplier;
            break;
        }
    }
    
    for (var x = 0; x < ns.length; x++) {
        let temp = minD / ds[x];
        ns[x] *= temp;
    }

    n = ns.reduce((a, b) => a += b);

    return n / minD === Math.floor(n / minD) ? n / minD : [n, minD];
}



console.log(sumFracts([[1, 2], [1, 3], [1, 4]])); //, [13, 12])