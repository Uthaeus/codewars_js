// You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:


function catMouse(x){
    let cat = x.indexOf('C');
    let mouse = x.indexOf('m');

    return mouse - cat <= 3 ? 'Caught!' : 'Escaped!';
}



console.log(catMouse('C.....m')); //, "Escaped!")
console.log(catMouse('C..m')); //, "Caught!")