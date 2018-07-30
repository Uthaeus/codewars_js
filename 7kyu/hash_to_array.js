// Convert a hash into an array. Nothing more, Nothing less.


function convertHashToArray(hash){
  //your code here - sort the keys!
  let result = Object.keys(hash).map(function(k) {
    return [k, hash[k]];
  });

  return result.sort();
}



console.log(convertHashToArray({product: "CodeWars", powerLevelOver: 9000})) //,[["powerLevelOver", 9000], ["product", "CodeWars"]])