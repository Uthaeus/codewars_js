// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!


class Ship {
  constructor(draft,crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    return (this.crew * 1.5) - this.draft > 20;
  }
}

//YOUR CODE HERE...
 



var emptyShip = new Ship(0,0);
console.log(emptyShip.isWorthIt()) //,false)