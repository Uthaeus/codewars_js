// You will work out the number of candles that will fall from the provided string (y). You must add up the character code of each even indexed character in y, with the alphabetical position of each odd indexed character in y to give the string a total.


function cake(x, y){
  let thresh = Math.ceil(x * 0.7);
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  let total = 0;

  for (var i = 0; i < y.length; i++) {
    if (i % 2 == 0) {
      total += y.charCodeAt(i);
    } else {
      total += alph.indexOf(y[i]) + 1;
    }
  }
  return total > thresh ? 'Fire!' : 'That was close!';
}



//console.log(cake(900, 'abcdef')) //, 'That was close!')
//console.log(cake(56, 'ifkhchlhfd')) //, 'Fire!')
console.log(cake(824, 'mqblkusag')) // 'Fire!'