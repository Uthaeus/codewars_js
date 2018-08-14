// Your function is given four arguments (kanga1, rate1, kanga2, rate2); the first kangaroo's starting point, the first kangaroo's speed, the second kangaroo's starting point, and the second kangaroo's speed.


function kangaroo(kanga1, rate1, kanga2, rate2) {
  if (kanga1 > kanga2 && rate1 > rate2 || kanga1 < kanga2 && rate1 < rate2) {
    return false;
  } else if (kanga1 == kanga2) {
    return true;
  }
  let result = false;
  return result;
}



console.log(kangaroo(-1571,4240,9023,4234)) //, false)
console.log(kangaroo(129,15,147,9)); //, true)