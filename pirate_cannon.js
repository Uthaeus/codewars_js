// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 4 or less.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay


const cannonsReady = (gunners) => {
  //your solution here

  for (guy in gunners) {
    if (gunners[guy] != 'aye') {
      return 'Shiver me timbers!';
    }
  }
  return 'Fire!';
}



var a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'},
    b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

console.log(cannonsReady(a)) //, 'Fire!')
console.log(cannonsReady(b)) //, 'Shiver me timbers!')