// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


function howMuchILoveYou(nbPetals) {
    // your code
  let pos = 0;
  let petals = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all'
  ];
  if (nbPetals > petals.length) {
    pos = (nbPetals % petals.length) - 1;
    if (pos < 0) {
      pos = petals.length - 1;
    }
  } else {
    pos = nbPetals - 1;
  }
  return petals[pos];
}


console.log(howMuchILoveYou(7)) //,"I love you")
console.log(howMuchILoveYou(12)) //,"not at all")