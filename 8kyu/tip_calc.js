// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.


function calculateTip(amount, rating) {
  let rate = rating.toLowerCase();
  let tipPct = 0;

  switch(rate) {
    case 'terrible':
      tipPct = 0;
      break;
    case 'poor':
      tipPct = 0.05;
      break;
    case 'good':
      tipPct = 0.1;
      break;
    case 'great':
      tipPct = 0.15;
      break;
    case 'excellent':
      tipPct = 0.2;
      break;
  }
  return Math.ceil(amount * tipPct);
}


console.log(calculateTip(20, "Excellent")) //, 4)