// Create a function that finds the integral of the expression passed


function integrate(coefficient, exponent) {
  let newExp = exponent + 1;
  let newCo = coefficient / newExp;

  return `${newCo}x^${newExp}`;
}



console.log(integrate(12,5)) //, "2x^6")