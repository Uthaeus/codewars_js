// You are given a string of n lines, each substring being n characters long


function rot(strng) {
    let result = [];
    let arr = strng.split("\n");

    for (var x = 0; x < arr.length; x++) {
        result.unshift(arr[x].split('').reverse().join(''));
    }
    return result.join("\n");
}
function selfieAndRot(strng) {
    let result, tempResult = [];
    let arr = strng.split("\n");
    let mirror = rot(strng).split("\n");
    let selfie = arr.join("....\n");

    for (var x = 0; x < mirror.length; x++) {
        selfie += "\n...." + mirror[x];
    }
    return selfie;
}
function oper(fct, s) {
    return fct(s);
}


console.log(oper(rot, "rkKv\ncofM\nzXkh\nflCB")); //, "BClf\nhkXz\nMfoc\nvKkr")

console.log(oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP")); 
// "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"))