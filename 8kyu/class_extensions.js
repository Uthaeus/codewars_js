// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}



var cat = new Cat('Mr Whiskers');
console.log(cat.speak()) //,'Mr Whiskers meows.'