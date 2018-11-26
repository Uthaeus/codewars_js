// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.


function outed(meet, boss){
    let total = 0, count = 0;

    for (let person in meet) {
        let temp = person == boss ? meet[person] * 2 : meet[person];
        total += temp;
        count++;
    }
    return total / count >= 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}



console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')); //, 'Get Out Now!')