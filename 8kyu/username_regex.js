// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).


function validateUsr(username) {
  var res =  /[^a-z0-9_]/g;
  var temp = username.replace(res, '');
  return temp == username && temp.length >= 4 && temp.length <= 16;
}



console.log(validateUsr('012')) //, false))
console.log(validateUsr('p1pp1')) //, true)
console.log(validateUsr('Hass')) //, false)