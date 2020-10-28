// Write a function, gooseFilter / goose-filter / goose_filter /GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.


function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let result = [];

    for (let x = 0; x < birds.length; x++) {
        if (!geese.includes(birds[x])) {
            result.push(birds[x]);
        }
    }
    return result;
};


console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])); //,["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])); //,["Mallard", "Hook Bill", "Crested", "Blue Swedish"]