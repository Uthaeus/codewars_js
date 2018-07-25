// Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.


function datingRange(age){
  //return min-max
  let min, max;
  
  if (age <= 14) {
    min = Math.floor(age - 0.10 * age);
    max = Math.floor(age + 0.10 * age);
  } else {
    min = Math.floor(7 + age / 2);
    max = Math.floor((age - 7) * 2);
  }
  return `${min}-${max}`;
}



console.log(datingRange(17)) //, "15-20")