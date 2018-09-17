// Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.


function timedReading(maxLength, text) {
    //coding and coding..
    let onlyLetters = text.replace(/[^a-zA-Z\s]/g, '');
    let myWords = onlyLetters.split(' ').filter(a => a.length <= maxLength && a.length > 0);
    console.log(myWords);
    return myWords.length;
}



console.log(timedReading(3,"Suddenly he stopped, and glanced up at the houses")); //,5)
console.log(timedReading(1,"...")); //,0)