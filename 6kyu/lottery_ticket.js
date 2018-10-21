// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot. Example ticket:


function bingo(ticket, win){
    let wins = 0;

    for (let i = 0; i < ticket.length; i++) {
        let code = ticket[i][0];
        let num = ticket[i][1];
        for (let x = 0; x < code.length; x++) {
            if (code.charCodeAt(x) == num) {
                wins++;
                break;
            }
        }
    }
    return wins >= win ? 'Winner!' : 'Loser!';
}



console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)); //, 'Loser!')
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)); //, 'Winner!')