// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.


function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / (normPrice * (discount / 100)))
}



console.log(dutyFree(17, 10, 500)) //, 294)