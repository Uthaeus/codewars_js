// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.


function findNextSquare(sq) {
    for (let x = sq; ; x++) {
        let root = Math.sqrt(x);
        if (x == sq && !Number.isInteger(root)) {
            return -1;
        } else if (x != sq && Number.isInteger(root)) {
            return x;
        }
    }
}


console.log(findNextSquare(625)); //, 676