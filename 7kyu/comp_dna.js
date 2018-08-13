// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have a function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


function DNAStrand(dna){
  //your code here
  let result = '';
  for (let letter in dna) {
    switch (dna[letter]) {
      case 'A':
        result += 'T';
        break;
      case 'T':
        result += 'A';
        break;
      case 'G': 
        result += 'C';
        break;
      case 'C':
        result += 'G';
        break;
    }
  }
  return result;
}



console.log(DNAStrand("ATTGC")); //,"TAACG")