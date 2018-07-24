// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):


function defineSuit(card) {
  // good luck
  let suits = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  };

  let suit = card[card.length - 1];

  return suits[suit];
}



console.log(defineSuit('3♣')); //, 'clubs')
console.log(defineSuit('9♦')); //, 'diamonds')