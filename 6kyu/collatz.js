// Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:


function collatz(n){
    let result = [n];

    while (n > 1) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n = (3 * n) + 1;
        }
        result.push(n);
    }
    return result.join('->');
}




console.log(collatz(3)); // == "3->10->5->16->8->4->2->1")