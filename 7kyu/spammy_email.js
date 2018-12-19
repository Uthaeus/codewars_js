// You need to replace these elements with the personal details of the person to whom you are sending the email. You will receive this information in a hash called person, which may contain other information from the database, which you don't need.


function personalise( campaign, person){
    let result = "";
    let adder = true;
    let temp = "";
    
    for (var x = 0; x < campaign.length; x++) {
        if (campaign[x] === '<') {
            adder = false;
        } 
        if (adder) {
            result += campaign[x]
        } else if (campaign[x] === '>') {
            adder = true;
            result += person[temp.slice(1).replace(' ', '_').toLowerCase()];
            temp = "";
        } else {
            temp += campaign[x];
        }
    }
    return result;

    // for (var x = 0; x < arr.length; x++) {
    //     let temp = arr[x].match(/<(.*)>/);
    //     if (temp) {
    //         let re = new RegExp(temp[0], 'g');
    //         let res = arr[x].replace(re, person[temp[1].replace(' ', '_').toLowerCase()]);
    //         result.push(res);
    //     } else {
    //         result.push(arr[x]);
    //     }
    // }
    // return result;
}



let person = {name:"Sally", city:"Glasgow", favourite_products:"toasters"};
let inps = ["Hello <NAME>","how is the weather in <CITY> today?","We wanted to let you know that <FAVOURITE PRODUCTS> are on sale today only!"];

console.log(personalise(inps.join(' '), person));
// ["Hello Sally","how is the weather in Glasgow today?","We wanted to let you know that toasters are on sale today only!"];