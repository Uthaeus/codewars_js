// I've written five function, each function receives a parameter: arr(an array), you should coding something with arr.


function getLength(arr){
    return arr.length;
}
function getFirst(arr){
    return arr[0];
}
function getLast(arr){
    return arr[arr.length - 1];
}
function pushElement(arr){
    var el=1;
    arr.push(el);
    return arr
}
function popElement(arr){
    let popped = arr.pop();
    return arr;
}


console.log(pushElement([1,2,3]).length); //,4
console.log(popElement([1,2,3]).length); //,2