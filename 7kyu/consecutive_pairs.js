// your task will be to return the count of pairs that have consecutive numbers


function pairs(ar){
    let count = 0; 

    for (let x = 0; x < ar.length; x += 2) {
        if (ar[x] == ar[x + 1] + 1 || ar[x] == ar[x + 1] - 1) {
            count++;
        }
    }
    return count;
};


console.log(pairs([1,2,5,8,-4,-3,7,6,5])); //,3)

console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62])); //,4)