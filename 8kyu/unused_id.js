// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!


function nextId(ids){
    for (var x = 0; x < ids.length; x++) {
        if (!ids.includes(x)) {
            return x;
        }
    }
    return Math.max(...ids) + 1;
}



console.log(nextId([0,1,2,3,4,5,6,7,8,9,10])); //, 11))