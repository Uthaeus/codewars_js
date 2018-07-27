// The objective of 'Duck, duck, goose' is to walk in a circle, tapping on each player's head until one is finally chosen. 


function duckDuckGoose(players, goose) {
  // ...
  goose = (goose - 1) % players.length;
  return players[goose].name;
}

class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 10)) //, "z")
console.log(duckDuckGoose(players, 30)) //, "z")
console.log(duckDuckGoose(players, 28)) //, "g")