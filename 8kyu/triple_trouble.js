// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter,


function tripleTrouble(one, two, three){
  //Solution
  let result = [];

  for (var i = 0; i < one.length; i++) {
    result.push(one[i], two[i], three[i]);
  }
  return result.join('');
 }


 console.log(tripleTrouble("this","test","lock")) //, "ttlheoiscstk")