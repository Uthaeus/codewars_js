// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.


function isOpposite(s1,s2){
  //coding here...
  var temp = s1.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
  return temp == s2;
}



console.log(isOpposite("aBcd","AbCD")) // , true)