// Soon the only task remaining was to write a function to select from the sounds you had recorded depending on what time it was


function fizzBuzzCuckooClock(time) {
    let initTime = time.split(":");

    let hr = +initTime[0];
    let min = +initTime[1];

    if (min == 0) {
        hr = hr == 0 ? 12 : hr > 12 ? hr - 12 : hr;
        let temp = [];
        for (let x = 0; x < hr; x++) {
            temp.push("Cuckoo");
        }
        return temp.join(" ");
    } else if (min == 30) {
        return "Cuckoo";
    } else if (min % 3 == 0 && min % 5 == 0) {
        return "Fizz Buzz";
    } else if (min % 5 == 0) {
        return "Buzz";
    } else if (min % 3 == 0) {
        return "Fizz";
    } else {
        return 'tick';
    }
}



console.log(fizzBuzzCuckooClock("13:34")) //, "tick")
console.log(fizzBuzzCuckooClock("11:15")) //, "Fizz Buzz")
console.log(fizzBuzzCuckooClock("21:00")) //, "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo")
  