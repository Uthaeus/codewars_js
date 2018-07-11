// Given a string S. You have to return another string such that even-indexed and odd-indexed characters of S are grouped and groups are space-separated (see sample below)


function sortMyString(S) {
  var evens = [];
  var odds = [];
  var wordArray = S.split('');

  for (var i = 0; i < wordArray.length; i++) {
    if (i % 2 == 0) {
      evens.push(wordArray[i]);
    } else {
      odds.push(wordArray[i]);
    }
  }
  var result = [evens.join(''), odds.join('')];

  return result.join(' ');
}




console.log(sortMyString("CodeWars")) //, "CdWr oeas"))