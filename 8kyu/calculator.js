// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.


function calculator(a,b,sign){
    if (isNaN(a) || isNaN(b)) return 'unknown value';
    switch(sign) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            return "unknown value";
            break;
    }

}


console.log(calculator(3,5,"*")); //, 15