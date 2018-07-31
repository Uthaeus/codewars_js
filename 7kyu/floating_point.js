// solve(a, b, c) that will return the "solution" x2 of (1) such as abs(a * x2 ** 2 + b * x2 + c) < 1e-12


function quadratic(a, b, c) {
    let y = b * (1.0 - 2.0 * a * c / b / b);
    // b > 0
    let x1 = -(y + b) / (2 * a);
    let x2 = c / (x1 * a);
    let r;
    if (Math.abs(x1) < Math.abs(x2)) r = x1;
    else r = x2;
    return r;
}



console.log()