// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
  let g = 0; 
  let b = 0;

  for (var i = 0; i < x.length; i++) {
    x[i] == 'good' ? g += 1 : b += 1;
  }

  if (g == 0) {
    return 'Fail!';
  } else if (g > 2 && b > 2) {
    return 'I smell a series!';
  } else {
    return 'Publish!';
  }
}



console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) //, 'Publish!')
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) //, 'I smell a series!')