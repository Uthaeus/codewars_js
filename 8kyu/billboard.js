// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.


function billboard(name, price = 30){
    let total = 0;
    for (var x = 0; x < name.length; x++) {
        total += price;
    }
    return total;
}



console.log(billboard("Abishai Charalampos")); //, 570)