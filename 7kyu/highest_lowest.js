// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


function highAndLow(numbers){
    let arr = numbers.split(' ').map(a => +a);
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
  

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); //, "542 -214");