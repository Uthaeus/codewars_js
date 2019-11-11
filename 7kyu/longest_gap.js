// Write function gap(num) that, given a positive num, returns the length of its longest binary gap


function gap(num) {
    let biNum = num.toString(2);
    let counting = false, count = 0, maxCount = 0;

    for (let x = 0; x < biNum.length; x++) {
      if (biNum[x] === '1' && biNum[x + 1] == '0') {
        counting = true;
      }
      if (counting && biNum[x] == '0') {
        count++
      }
      if (counting && biNum[x + 1] == '1') {
        if (count > maxCount) {
          maxCount = count;
        }
        counting = false;
        count = 0;
      }
      
    }
    return maxCount;
}



console.log(gap(529)); //,4)