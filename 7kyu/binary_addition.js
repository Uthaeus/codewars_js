// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.


function addBinary(a,b) {
    var x = a + b;
    return x.toString(2);
}


console.log(addBinary(1,2)); '11';