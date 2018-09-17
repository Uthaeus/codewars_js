// Given n and firstNumber/first_number, find the number which is written in the radially opposite position to firstNumber.


function circleOfNumbers(n, firstNumber) {
    //coding and coding..
    let center = Math.floor(n / 2);

    return firstNumber < center ? firstNumber + center : firstNumber - center;
}



console.log(circleOfNumbers(10,7)); // , 2)
console.log(circleOfNumbers(4,1)); // , 3)