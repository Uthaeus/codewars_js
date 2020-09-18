let reverser = () => {
    // let arr = str.split('').reverse('').join('');
    // return arr;
    console.log();
}

String.prototype.reverse = function() {
    let result = this.toString().split('').reverse().join('');
    return result;
}

console.log('Hello World!'.reverse());
// console.log(String.prototype.hasOwnProperty('reverse'));