//  takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string


function vowel2index(str) {
    let vowels = 'aeiou';
    return str.split('').map((i, ind) => vowels.includes(i.toLowerCase()) ? ind + 1 : i).join('');
}



console.log(vowel2index('this is my string')); //,'th3s 6s my str15ng'