// It's the most hotly anticipated game of the school year - Gryffindor vs Slytherin! Write a function which returns the winning team.


function gameWinners(gryffindor, slytherin) {
    let gScore = gryffindor[0];
    let sScore = slytherin[0];

    if (gryffindor[1] === 'yes') {
        gScore += 150;
    } else if (slytherin[1] === 'yes') {
        sScore += 150;
    }
    return gScore === sScore ? "It's a draw!" : gScore > sScore ? 'Gryffindor wins!' : 'Slytherin wins!';
};



console.log(gameWinners([350, 'no'],[250, 'yes'])); //, "Slytherin wins!")