// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).


function vowelIndices(word){
    let result = [];
    let vowels = 'aeiouy';

    for (let x = 0; x < word.length; x++) {
        if (vowels.includes(word[x].toLowerCase())) {
            result.push(x + 1);
        }
    }
    return result;
}


console.log(vowelIndices("orange")); //, [1,3,6]