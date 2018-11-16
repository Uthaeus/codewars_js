// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.


function crap(x, bags, cap){
    let totalCap = bags * cap;
    let dog = false;
    let craps = 0;

    for (sub in x) {
        for (let i = 0; i < x[sub].length; i++) {
            if (x[sub][i] == '@') {
                craps++;
            } else if (x[sub][i] == 'D') {
                dog = true;
            }
        }
    }
    if (dog) {
        return 'Dog!!';
    }
    return craps > totalCap ? 'Cr@p' : 'Clean';
}



console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)); //, "Clean")
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2)); //, "Dog!!")