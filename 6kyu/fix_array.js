// You will be given a jumbled sequence of integers and your task is to reorder them so that they conform to the above sequence. There will always be an answer.


function solve(arr){
    //..
  let heads = arr.filter(a => a % 3 === 0 && arr.includes(a / 3)); 
  let headCounter = 0;
  let result = [];
  let myArr = arr.slice();

  while (result.length <= arr.length) {
    if (result.length === 0) {
      result.push(heads[headCounter]);
      let headInd = myArr.indexOf(heads[headCounter]);
      myArr.splice(headInd, 1);
    }

    console.log(heads);
    console.log(result);

    if (myArr.includes(result[result.length - 1] / 3)) {
      let ind = myArr.indexOf(result[result.length - 1] / 3);
      result.push(myArr[ind]);
      myArr.splice(ind, 1);

      console.log(result);

      if (myArr.includes(result[result.length - 1] * 2)) {
        let i = myArr.indexOf(result[result.length - 1] * 2);
        result.push(myArr[i]);
        myArr.splice(i, 1);
      } else {
        result = [];
        headCounter === head.length - 1 ? headCounter = 0 : headCounter += 1;
       }
    } else {
      result = [];
      headCounter === head.length - 1 ? headCounter = 0 : headCounter += 1;
    }

  }

  return result;
} 



console.log(solve([4,8,6,3,12,9])); //,[9,3,6,12,4,8])