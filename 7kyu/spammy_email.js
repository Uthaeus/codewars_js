// You need to replace these elements with the personal details of the person to whom you are sending the email. You will receive this information in a hash called person, which may contain other information from the database, which you don't need.


function personalise( campaign, person){
    let result = [];

    for (var x = 0; x < campaign.length; x++) {
        let temp = campaign[x].match(/<(.*)>/)[1].replace(' ', '_').toLowerCase();
        console.log(temp);
    }
}



let person = {name:"Sally", city:"Glasgow", favourite_products:"toasters"};
let inps = ["Hello <NAME>","how is the weather in <CITY> today?","We wanted to let you know that <FAVOURITE PRODUCTS> are on sale today only!"];

console.log(personalise(inps, person));
// ["Hello Sally","how is the weather in Glasgow today?","We wanted to let you know that toasters are on sale today only!"];