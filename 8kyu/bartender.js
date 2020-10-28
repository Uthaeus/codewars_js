// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:


function getDrinkByProfession(param){
    let input = ["Jabroni", "School Counselor", "Programmer", "Bike Gang Member", "Politician", "Rapper"];
    let output = ["Patron Tequila", "Anything with Alcohol", "Hipster Craft Beer", "Moonshine", "Your tax dollars", "Cristal", "Beer"];

    for (let x = 0; x < input.length; x++) {
        if (param.toLowerCase() == input[x].toLowerCase()) {
            return output[x];
        }
    }
    return output[6];
}


console.log(getDrinkByProfession("prOgramMer")); //, "Hipster Craft Beer"