// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:


function multiTable(number) {
  // good luck
  let result = '';

  for (var i = 1; i <= 10; i++) {
    result += `${i} * ${number} = ${i * number}`;
    if (i < 10) {
      result += "\n";
    }
  }
  return result;
}



console.log(multiTable(1)); 
//, '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10')