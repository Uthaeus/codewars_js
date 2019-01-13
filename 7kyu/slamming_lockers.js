// The goal of this kata is to determine which lockers are open at the end of Johnny's running.


function lockerRun(lockers){
    // let arr = new Array(lockers).fill('c');
    // let result = [];
    
    // for (var x = 1; x <= lockers; x++) {
    //     for (var i = x - 1; i < arr.length; i += x) {
    //         if (arr[i] === 'c') {
    //             arr[i] = 'o';
    //         } else {
    //             arr[i] = 'c';
    //         }
    //     }
    //     console.log(arr);
    // }
    // for (var y = 0; y < arr.length; y++) {
    //     if (arr[y] === 'o') {
    //         result.push(y + 1);
    //     }
    // }
    // return result;
    let result = [];

    for (var x = 1; x <= lockers; x += x) {
        result.push(x);
    }
    return result;
}



console.log(lockerRun(5)); // ,[1,4])
console.log(lockerRun(8)); //,[1,4])