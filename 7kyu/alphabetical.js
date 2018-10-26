// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetcally, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26


function alphaSeq (str) {
    let result = [];
    let pre = str.toLowerCase().split('').sort().join('');
    for (var x = 0; x < pre.length; x++) {
        let temp = pre[x].toUpperCase() + pre[x].repeat(pre.charCodeAt(x) - 97);
        result.push(temp);
    }
    return result.join(',');
}



console.log(alphaSeq("MjtkuBovqrU"));
//, "Bb,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Ooooooooooooooo,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Tttttttttttttttttttt,Uuuuuuuuuuuuuuuuuuuuu,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv")