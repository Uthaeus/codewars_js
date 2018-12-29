// ALF has the technology to bring the spaceship home if he can lock on to it's location.


function findSpaceship(ma) {
  let result = "Spaceship lost forever.";
  ma = ma.split("\n").reverse();

  if (ma) {
    for (var x = 0; x < ma.length; x++) {
      if (ma[x].indexOf('X') > -1) {
        result = [ma[x].indexOf('X'), x];
      }
    }
  }
  return result;
}



let m = "..........\n..........\n..........\n.......X..\n..........\n..........";

console.log(findSpaceship(m)); // [7, 2]