// Your task is to create a function that given a number n simply returns the number of layers required to store up to n (included).


function layers(n){
  //your code here
  for (var i = 1, count = 0, temp = 0; temp < n; i += 2, count++) {
    temp = i * i;
  }
  return count;
}



console.log(layers(25)); //,3)
console.log(layers(50)); //,5)