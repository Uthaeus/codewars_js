//#Task: The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, the date on which you have just reached a.


function dateNbDays(a0, a, p) {
  // your code
  let startDate = new Date(Date.parse('2016/01/01'));
  let wanted = a - a0;
  let int = (p / 100) / 360;
  let days = 0;

  while (a0 <= a) {
    a0 += a0 * int;
    days++;
  }
  let expDate = startDate;
  expDate.setDate(startDate.getDate() + days);

  let result = expDate.toLocaleDateString();
  result = result.split('/');
  result.unshift(result.pop());

  for (var i = 0; i < result.length; i++) {
    if (result[i].length < 2) {
      result[i] = '0' + result[i];
    }
  }
  return result.join('-');
}



console.log(dateNbDays(4620, 5188, 2)) //, "2021-09-19"
console.log(dateNbDays(4281, 5087, 2)) //, "2024-07-03")