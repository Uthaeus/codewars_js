// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.


function sumFracts(l) {
    let ds = [], ns = [];
    let minD = Infinity;

    for (var x = 0; x < l.length; x++) {
        let tempD = l[x][1];
        if (tempD < minD) {
            minD = tempD;
        }
        ds.push(tempD);
        ns.push(l[x][0]);
    }
    console.log(ds, ns, minD);
}



console.log(sumFracts([[1, 2], [1, 3], [1, 4]])); //, [13, 12])