// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.


function bingo(a) {
    let bingo = [2, 9, 7, 14, 15];
    return bingo.every(x => a.includes(x)) ? "WIN" : "LOSE";
}



console.log(bingo([21,13,2,7,5,14,7,15,9,10])); //, "WIN")