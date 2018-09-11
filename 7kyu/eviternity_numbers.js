// An eviternity number is a number in which the count of the digit 8 >= count of digit 5 >= count of digit 3. The first few eviternity numbers are as follows. Note that they comprise of digits 8, 5 and 3 only.


function solve(a,b){
    //..
    let count = 0;

    for (let i = a; i <= b; i++) {
      let flag = true;
      let temp = i.toString();
      let eights = 0, fives = 0, threes = 0;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] === '8') {
          eights++;
        } else if (temp[j] === '5') {
          fives++;
        } else if (temp[j] === '3') {
          threes++;
        } else {
          flag = false;
          break;
        }
      }
      if (eights >= fives && fives >= threes && flag) {
        count++;
      }
    }
    return count;
}



//console.log(solve(0,100000)); //,103)
console.log(solve(0, 100)); // 4