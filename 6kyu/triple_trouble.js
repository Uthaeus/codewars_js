// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2


function tripledouble(num1, num2) {
    let trips = [], doubs = [];
    let str1 = num1.toString();
    let str2 = num2.toString();

    for (var x = 0; x < str1.length - 2; x++) {
        if (str1[x] == str1[x + 1] && str1[x] == str1[x + 2]) {
            trips.push(str1[x]);
        }
    }
    for (var x = 0; x < str2.length - 1; x++) {
        if (str2[x] == str2[x + 1] && str2[x] != str2[x + 2]) {
            doubs.push(str2[x]);
        }
    }
    for (var x = 0; x < trips.length; x++) {
        if (doubs.includes(trips[x])) {
            return 1;
        }
    }
    return 0;
}



console.log(tripledouble(666789, 12345667)); //,1)
console.log(tripledouble(12345, 12345)); //,0)
console.log(tripledouble(451999277,41177722899)); //,1)