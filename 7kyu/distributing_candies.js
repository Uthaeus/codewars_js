// There are some candies need to be distributed to some children as fair as possible(means that the variance of result needs to be as small as possible), but I don't know how to distribute, so I need your help. Your assignment is to write a function with signature distribute(m, n) in which m represents candies's number while n represents children's number, the function should return a List(or Array etc. depends on the specific language) which contains the number of candies' each child gains.


function distribute(m, n) {
    if (n <= 0) {
        return [];
    }
    let kids = new Array(n).fill(0);
    for (let x = 0, y = 0; y < m; x++, y++) {
        if (x >= n) {
            x = 0;
        }
        kids[x] += 1;
    }
    return kids;
}



console.log(distribute(15, 10).sort((a,b)=>a-b)); //, [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]))