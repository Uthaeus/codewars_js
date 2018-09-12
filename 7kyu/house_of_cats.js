// There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.


function houseOfCats(legs) {
  //coding and coding..
  
  let result = [];
  for (var i = 0; i <= legs; i += 4) {
    let temp = legs - i;
    result.unshift(Math.floor(temp / 2));
  }
  return result;
}



console.log(houseOfCats(8)); //,[0,2,4]))
console.log(houseOfCats(44)); //,[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22])