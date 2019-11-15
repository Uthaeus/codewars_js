// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:


class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);


function mostMoney(students) {
  let amts = [], max = 0;
  for (let x = 0; x < students.length; x++) {
    let amt = (students[x].fives * 5) + (students[x].tens * 10) + (students[x].twenties * 20);
    amts.push(amt);
  }
  for (let x = 0; x < amts.length; x++) {
    if (amts[x] > max) {
      max = amts[x];
    }
  }
  let total = amts.reduce((a, b) => a + b);
  return total / amts.length == max ? 'all' : students[amts.indexOf(max)].name;
}


console.log(mostMoney([andy, stephen, eric, david, phil])); //, "Eric")
console.log(mostMoney([david, cam, geoff])); //, "all")