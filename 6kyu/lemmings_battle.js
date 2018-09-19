// Given the number of battefields and the armies of both races, your task is to discover which race will win the Deadly War and show the power of the surviving soldiers.



function lemmingBattle(battlefield, green, blue) {
    green = green.sort((a, b) => b - a);
    blue = blue.sort((a, b) => b - a);
    while (green.length >= 0 && blue.length >= 0) {
        for (let x = 0; x < battlefield; x++) {
            if (green.length === 0 || blue.length === 0) { 
                break; 
            }
            let blueLem = blue.shift();
            let greenLem = green.shift();

            if (blueLem > greenLem) {
                blueLem -= greenLem;
                blue.push(blueLem);
            } else if (greenLem > blueLem) {
                greenLem -= blueLem;
                green.push(greenLem);
            } 
        }

        if (green.length === 0 && blue.length === 0) {
            return 'Green and Blue died';
        }
        if (green.length == 0) {
            return `Blue wins: ${blue.join(' ')}`;
        } else if (blue.length === 0) {
            return `Green wins: ${green.join(' ')}`;
        }
    }
}



console.log(lemmingBattle(2, [20, 10], [10, 10, 15])); //, "Blue wins: 5")
console.log(lemmingBattle(3, [50, 40, 30, 40, 50], [50, 30, 30, 20, 60])); //, "Green wins: 10 10")