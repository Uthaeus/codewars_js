// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:


function reverse(string){
  //your code here
  return string.split(' ').reverse().join(' ');
}



console.log(reverse('I am an expert at this')) //, 'this at expert an am I')