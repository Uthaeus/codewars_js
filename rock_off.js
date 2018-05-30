// Alice's band plays a Nirvana inspired grunge and has been rated 20 for Heaviness, 32 for Originality and only 18 for Outfits. Bob listens to Slayer and has gotten a good 48 for Heaviness, 25 for Originality and a rather honest 40 for Outfits.

// The total score should be followed by a colon : and by one of the following quotes: if Alice's band wins: Alice made "Kurt" proud! if Bob's band wins: Bob made "Jeff" proud! if they end up with a draw: that looks like a "draw"! Rock on!

// The solution to the example above should therefore appear like '1, 2: Bob made "Jeff" proud!'.


function solve(a, b) {

// HAPPY CODING!
  var temp = [], x = 0;
  var alice = 0, bob = 0, comment;
  while (x < a.length) {
    if (a[x] > b[x]) {
      alice++;
    } else if (b[x] > a[x]) {
      bob++;
    }
    x++;
  }
  if (alice > bob) {
    comment = 'Alice made "Kurt" proud!';
  } else if (bob > alice) {
    comment = 'Bob made "Jeff" proud!';
  } else {
    comment = 'that looks like a "draw"! Rock on!';
  }
  let result = `${alice}, ${bob}: ${comment}`;
  return result;
}



console.log(solve([25, 50, 22], [34, 49, 50])) //,'1, 2: Bob made "Jeff" proud!'))
console.log(solve([47, 67, 22], [26, 47, 12])) //,'3, 0: Alice made "Kurt" proud!')