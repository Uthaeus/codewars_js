// Anyway your task is to calculate how many successful shots you will be able to make given the available ammo and your aim score, then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged. You will always shoot left to right.


function duckShoot(ammo, aim, ducks){
  let success = Math.floor(ammo * aim);
  let result = '';

  for (var i = 0; i < ducks.length; i++) {
    if (ducks[i] == '2' && success > 0) {
      result += 'X';
      success--;
    } else {
      result += ducks[i];
    }
  }
  return result;
}



console.log(duckShoot(6, 0.41, '|~~~~~22~2~~~~~|')) //, '|~~~~~XX~2~~~~~|'
console.log(duckShoot(9, 0.22, '|~~~~~~~2~2~~~|')) //, '|~~~~~~~X~2~~~|')