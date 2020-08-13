// You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street.


function overTheRoad(address, n){
  let total = n * 2;
  let list = []

  // for (let x = 0; x <= n; x++) {
  //   list.push([x + 1, total - x]);
  // }
  // return list[address - 1][1];
  return total - (address - 1);
}


console.log(overTheRoad(1, 3)); // 6