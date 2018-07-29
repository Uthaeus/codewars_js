// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function lovefunc(flower1, flower2){
  // moment of truth
  return Math.abs(flower1 - flower2) % 2 == 1 ? true : false;
}



console.log(lovefunc(2,2)) //, false)
console.log(lovefunc(0,1)) //, true)