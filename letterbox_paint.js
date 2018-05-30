// Story
// You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

// Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

// But at the end of the day you realise not everybody did the same amount of work.

// To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

// Kata Task
// Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.



var paintLetterboxes = function(start, end) {
  // Your code here
  var temp = [];
  var result = [];
  var x = 0, count;
  for (var i = start; i <= end; i++) {
    temp.push(i);
  }
  var tempStr = temp.join('').toString();
  while (x < 10) {
    count = 0;
    for (var j = 0; j < tempStr.length; j++) {
      if (tempStr[j] == x.toString()) {
        count++
      }
    }
    result.push(count);
    x++;
  }
  return result;
}



console.log(paintLetterboxes(125, 132)) //, [1,9,6,3,0,1,1,1,1,1]);)
                                          // [ 1, 9, 6, 3, 0, 1, 1, 1, 1, 1, 0 ]