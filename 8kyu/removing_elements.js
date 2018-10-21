// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.


function removeEveryOther(arr){
    return arr.filter((_, ind) => ind % 2 == 0);
}



console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])) //,[['Goodbye']])