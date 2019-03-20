// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:


function points(games) {
    let total = 0;
    for (let x in games) {
        let score = games[x].split(":");
        if (score[0] > score[1]) {
            total += 3;
        } else if (score [0] == score[1]) {
            total += 1;
        }
    }
    return total;
}



console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); // , 30)

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); // , 10)