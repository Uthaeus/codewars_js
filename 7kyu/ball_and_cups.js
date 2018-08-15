// Ronny the robot is watching someone perform the Cups and Balls magic trick. The magician has one ball and three cups, he shows Ronny which cup he hides the ball under (b), he then mixes all the cups around by performing multiple two-cup switches (arr). Ronny can record the switches but can't work out where the ball is. Write a programme to help him do this.


function cupAndBalls(b, arr){
  for (let pairs in arr) {
    if (arr[pairs].includes(b)) {
      b = b === arr[pairs][0] ? arr[pairs][1] : arr[pairs][0];
    }
  }
  return b;

};



console.log(cupAndBalls(2,[[1,3],[1,2],[2,1],[2,3]])); //, 3)