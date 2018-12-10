// In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.


function solve(s){
    

    for (var x = 0; x < s.length; x++) {
        let newS = s, checkS = [];
        let objS = {};
        let tempS = newS.replace(newS[x], '');

        for (var i = 0; i < tempS.length; i++) {
            if (objS[tempS[i]]) {
                objS[tempS[i]]++;
            } else {
                objS[tempS[i]] = 1;
            }
        }

        for (var item in objS) {
            checkS.push(objS[item]);
        }

        if (checkS.every(v => v === checkS[0])) {
            return true;
        }
    }
    return false;
};



console.log(solve('abbba')); //,true)
console.log(solve('aaaabb')); //,false)
console.log(solve('aaaa')); //,true)