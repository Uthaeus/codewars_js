// Task:
// Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."



var countSheep = function (num){
  var output = ''

  for (var i = 1; i <= num; i++) {
    output += `${i} sheep...`;
  }

  return output;
}



console.log(countSheep(2)) //, "1 sheep...2 sheep...")