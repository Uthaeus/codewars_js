// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:


function warnTheSheep(queue) {
    let count = 0;
    for (let x = queue.length - 1; x >= 0; x--) {
        if (queue[x] == 'wolf' && count == 0) {
            return 'Pls go away and stop eating my sheep';
        } else if (queue[x] == 'wolf') {
            return `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`;
        }
        count++;
    }
}


console.log(warnTheSheep(["sheep", "wolf", "sheep"])); //, "Oi! Sheep number 1! You are about to be eaten by a wolf!"