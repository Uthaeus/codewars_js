// Given time in 24-hour format, convert it to words.


function solve(time) {
    let timeArr = time.split(':');
    let [hours, mins] = timeArr;
    let minText, minWord;
    let hourText = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];

    if (hours == '00' && mins == '00') {
        return 'midnight';
    }
    // min des
    if (mins == '00') {
        minText = "o'clock";
    } else if (mins <= '30') {
        minText = 'past';
    } else if (mins <= '59') {
        minText = 'to';
    }

    hours = minText == 'to' ? hours + 1 : hours;
    mins = minText == 'to' ? 60 - +mins : +mins;


    if (+hours > 12) { 
        hours = +hours - 12;
    }

    let first = hourText[+hours];
    
    
    if (mins == 15 || mins == 45) {
        minWord = 'quarter';
    } else if (mins == 30) {
        minWord = 'half';
    } else if (mins < 20) {
        minWord = ones[mins];
    } else {
        let ten = Math.floor(mins / 10);
        let one = mins % 10;
        minWord = `${tens[ten]} ${ones[one]}`;
    }

    let minutes = mins < 2 ? 'minute' : 'minutes';
    
    switch (minText) {
        case "o'clock":
            return `${first} ${minText}`;
            break;
        case "past":
            return `${minWord} ${minutes} past ${first}`;
            break;
        case "to":
            return `${minWord} to ${first}`;
            break;
        default:
            return 'error error'
    }

}


console.log(solve("13:09")); //,"nine minutes past one")
console.log(solve("13:29")); //,"twenty nine minutes past one")
console.log(solve("00:08")); //,"eight minutes past midnight")