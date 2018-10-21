// A squared string is a string of n lines, each substring being n characters long. We are given two n-squared strings. For example:


function compose(s1, s2) {
    let result = [];
    let str1 = s1.split("\n");
    let str2 = s2.split("\n");

    for (var x = 0, y = str2.length - 1; y >= 0; x++, y--) {
        let temp = str1[x].slice(0, x + 1) + str2[y].slice(0, y + 1);
        result.push(temp);
    }
    return result.join("\n");
}



console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB")); 
// "bNkTB\nhTrWO\nRTFVi\nCnnIj"