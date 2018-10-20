// Create a method one? (JS one) that accepts two params, a list and a block (JS: a function), and returns true only if the block (/function) returns true for exactly one item in the array


function one(arr, fun){
    let result = [];

    for (var x = 0; x < arr.length; x++) {
        if (fun(arr[x])) {
            result.push(true);
        }
    }
    return result.length === 1;
}



console.log(one([1,2,3,4,5], function(item){ return item%2 })); 
//, false, "more than 1 item are odd")
console.log(one([1,2,3,4,5], function(item){ return item<2}));
//, true)