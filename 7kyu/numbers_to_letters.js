// Given an array of numbers, you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.


function switcher(x){
    let alph = " ?!abcdefghijklmnopqrstuvwxyz1";
    let inds = alph.split('').reverse();
    let result = "";

    for (let n in x) {
        let temp = alph.indexOf(inds[+x[n]]);
        result += alph[temp];
    }
    return result;
}



console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); //, 'codewars')
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])); //, 'btswmdsbd kkw')