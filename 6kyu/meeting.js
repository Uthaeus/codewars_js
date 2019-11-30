// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.


function meeting(s) {
    let indsArr = s.split(';').map(a => {
      return a.toUpperCase().split(':');
    });

    let sorted = indsArr.sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0] < b[0]) {
          return -1;
        }
        if (a[0] > b[0]) {
          return 1;
        }
        return 0;
      } else {
        if (a[1] < b[1]) {
          return -1;
        }
        if (a[1] > b[1]) {
          return 1;
        }
        return 0;
      }
    });

    let result = sorted.map(a => {
      return `(${a[1]}, ${a[0]})`;
    });

    return result.join('');
}



let a = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn";

console.log(meeting(a));
  // "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"