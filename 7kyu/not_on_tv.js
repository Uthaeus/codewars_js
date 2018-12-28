//Write a function, bucketOf(str), that takes a string and determines what will be dumped on your head. If you haven't said anything you shouldn't have, the bucket should be filled with "air". The words should be tested regardless of case.


function bucketOf(str) {
    let waters = ["water", "wet", "wash"];
    let slimes = ["i don't know", "slime"];
    let water = false, slime = false;

    for (var x = 0; x < waters.length; x++) {
        if (str.toLowerCase().includes(waters[x])) {
            water = true;
        }
        if (slimes[x]) {
            if (str.toLowerCase().includes(slimes[x])) {
                slime = true;
            }
        }
    }
    if (water && slime) {
        return "sludge";
    } else if (water) {
        return "water";
    } else if (slime) {
        return "slime";
    } else {
        return "air";
    }
}



console.log(bucketOf("What is that, WATER?!?")); // -> "water")