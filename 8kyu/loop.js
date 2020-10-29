// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even


function pickIt(arr){
    var odd=[],even=[];
    
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] % 2 == 0) {
            even.push(arr[x]);
        } else {
            odd.push(arr[x]);
        }
    }
    
    
    return [odd,even];
}


console.log(pickIt([10,20,30])); //,[[],[10,20,30]]