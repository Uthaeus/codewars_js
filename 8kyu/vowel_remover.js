// Create a function called shortcut to remove all the lowercase vowels in a given string.


function shortcut(string){
    return string.replace(/[aeiou]/g, '');
}



console.log(shortcut('how are you today?')); // == 'hw r y tdy?')