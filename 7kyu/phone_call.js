// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?


function phoneCall(min1, min2_10, min11, s) {
  //coding and coding..
  let i;
  if (s < min1) {
    return 0;
  }

  for (i = 1; s >= 0; i++) {
    if (i === 1) {
      s -= min1;
    } else if (i >= 2 && i <= 10) {
      if (s - min2_10 >= 0) { 
        s -= min2_10;
      } else {
        break;
      }
    } else {
      if (s - min11 >= 0) {
        s -= min11;
      } else {
        break;
      }
    }
  }
  return i - 1;
}



console.log(phoneCall(10,1,2,22)); // , 11
console.log(phoneCall(2,2,1,24)); // , 14)