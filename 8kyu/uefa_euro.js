// Finish the uefaEuro2016() function so it return string just like in the examples below:



function uefaEuro2016(teams, scores){
  // your code...
  let winner = scores[0] > scores[1] ? 0 : scores[0] < scores[1] ? 1 : false;
  let outcome;
  if (winner !== false) {
    outcome = `${teams[winner]} won!`;
  } else {
    outcome = 'teams played draw.'
  }
  result = `At match ${teams[0]} - ${teams[1]}, ` + outcome;
  return result;
}



console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])) 
//, "At match Germany - Ukraine, Germany won!")
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])) 
//, "At match Portugal - Iceland, teams played draw.")