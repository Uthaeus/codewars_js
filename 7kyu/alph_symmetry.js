// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example, solve(["abode","ABc","xyzD"]) = [4,3,1]. See test cases for 


function solve(arr){  
//code
  let result = [];
  let alph = 'abcdefghijklmnopqrstuvwxyz';

  for (let word in arr) {
    let temp = arr[word].toLowerCase().split('');
    let count = 0;

    for (var i = 0; i < temp.length; i++) {
      if (temp[i] === alph[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};



console.log(solve(["abide","ABc","xyz"])) //,[4,3,0])