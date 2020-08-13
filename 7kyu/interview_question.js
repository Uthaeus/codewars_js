// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using an asterisk (*).


function getStrings(city){
  let arr = city.toLowerCase();
  let checkArr = [];
  let list = {};
  let answer = [];

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] == ' ') {
      continue;
    } else {
      
      if (list[arr[x]]) {
        list[arr[x]]++;
      } else {
        list[arr[x]] = 1;
      }
      if (checkArr.includes(arr[x])) {
        continue;
      } else {
        checkArr.push(arr[x]);
      }
    }
  }

  for (let x = 0; x < checkArr.length; x++) {
    let temp = `${checkArr[x]}:${'*'.repeat(list[checkArr[x]])}`;
    answer.push(temp);
  }

  return answer.join(',');

}


console.log(getStrings("Chicago")); //, "c:**,h:*,i:*,a:*,g:*,o:*")
console.log(getStrings("Las Vegas")); //, "l:*,a:**,s:**,v:*,e:*,g:*"))