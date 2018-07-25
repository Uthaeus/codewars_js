// You'll be given a string, and have to return the total of all the unicode characters as an int. Should be able to handle any characters sent at it.


function uniTotal(str) {
// total up dem unicodes!
  let total = 0;

  for (x in str) {
    total += str.charCodeAt(x);
  }

  return total;
}



console.log(uniTotal("a")) //, 97)
console.log(uniTotal("aaa")) //, 291)