// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.


function stockList(listOfArt, listOfCat){
  let hash = {}, result = [], fault = false;

  for (let x = 0; x < listOfCat.length; x++) {
    for (let y = 0; y < listOfArt.length; y++) {
      if (listOfCat[x] === listOfArt[y][0]) {
        let temp = listOfArt[y].split(' ');
        if (hash[listOfCat[x]]) {
          hash[listOfCat[x]] += +temp[1];
        } else {
          hash[listOfCat[x]] = +temp[1];
        }
      }
    }
  }

  let count = 0;

  for (let x = 0; x < listOfCat.length; x++) {
    if (!hash[listOfCat[x]]) {
      hash[listOfCat[x]] = 0;
      count++;
    }
    let tempResult = `(${listOfCat[x]} : ${hash[listOfCat[x]]})`;
    result.push(tempResult);

    if (count === listOfCat.length) {
      fault = true;
    }
  }

  return fault ? "" : result.join(' - ');
}

// b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
// c = ["A", "B"];

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]

console.log(stockList(b, c)); // "(A : 200) - (B : 1140)"
                              // "(A : 0) - (B : 114) - (C : 70) - (W : 0)"