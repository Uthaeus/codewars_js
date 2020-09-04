// the function amort will return a formatted string:

// "num_payment %d c %.0f princ %.0f int %.0f balance %.0f" (with arguments num_payment, c, princ, int, balance)


function amort(rate, bal, term, num_payments) {
  // your code
  // please use .toFixed(0) to format numbers
  var r = (rate / 12) / 100;
  var n = term;
  var m = num_payments;
  var c = (r / (1 - (1 + r) ** -n)) * bal;

  var balance = ((1 + r) ** m * bal) - (((((1 + r) ** m) - 1) / r) * c)

  var toInterest = (r / m) * balance;

  return toInterest;
}


console.log(amort(3.7, 64760, 36, 24)) //, "num_payment 24 c 1903 princ 1829 int 75 balance 22389"));


