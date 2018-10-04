// Integer in currency format is expressed by a string of number where every three characters are separated by comma.


function toCurrency(price){
    let numArr = price.toString().split('').reverse();

    for (let x = 3; x < numArr.length; x += 4) {
        numArr.splice(x, 0, ',');
    }
    return numArr.reverse().join('');
}



let price1 = 123456;
let price2 = 1234;
let price3 = 123;
let price4 = 123456789012;

console.log(toCurrency(price1)); //, "123,456"
console.log(toCurrency(price4)); //, "123,456,789,012")