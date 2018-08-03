// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// I have created two objects that return a one word name in response to the first letter of your first name and one for the first letter of your surname.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.


function aliasGen(f, l){
    // Code Here
  let fL = f.slice(0, 1);
  let lL = l.slice(0, 1);
  
}



console.log(aliasGen("Anuddanumbha", "23200")) //, "Your name must start with a letter from A - Z.")