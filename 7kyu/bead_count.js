// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.



function countRedBeads(n) {
  //your code here
  if (n < 2) {
    return 0;
  } else {
    return (n - 1) * 2;
  }
}




console.log(countRedBeads(3)) //, 4)