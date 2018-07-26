// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.


function evil(n) {
  let bin = n.toString(2);
  let count = 0;

  for (var i = 0; i < bin.length; i++) {
    if (bin[i] == '1') {
      count++;
    }
  }
  return count % 2 == 0 ? "It's Evil!" : "It's Odious!";
}


console.log(evil(2)) //,"It's Odious!")
console.log(evil(3)) //,"It's Evil!")