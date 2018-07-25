// Terminal Game - Create Hero Prototype
// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:


function Hero (name = 'Hero') {
  // add default values here
  this.name = name,
  this.position = '00',
  this.health = 100,
  this.damage = 5,
  this.experience = 0
}

var p1 = new Hero('Jim');

console.log(p1.name);
console.log(p1.health);



