// Complete the function which returns the weekday according to the input number


function whatday(num) { 
    let day = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday', 
        6: 'Friday',
        7: 'Saturday'
    }

    if (num > 0 && num < 8) {
        return day[num];
    } else {
        return 'Wrong, please enter a number between 1 and 7'
    }
  
}



console.log(whatday(3)); //,'Tuesday')