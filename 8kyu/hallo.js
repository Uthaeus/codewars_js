
let hellos = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];

function validateHello(greetings) {
  return (/hello|ciao|salut|hallo|hola|ahoj|czesc/gi).test(greetings);
}



console.log(validateHello('ahoj')) //, true
console.log(validateHello('meh')) //, false)

