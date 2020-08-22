// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.


function sumConsecutives(s) {
    let result = [];

    for (let x = 0; x < s.length; x++) {
        let temp = s[x];
        while (s[x] == s[x + 1]) {
            x++;
            temp += s[x];
        }
        result.push(temp);
    }
    return result;
}


console.log(sumConsecutives([1,4,4,4,0,4,3,3,1])); //,[1,12,0,4,6,1])
console.log(sumConsecutives([-5,-5,7,7,12,0])); //,[-10,14,12,0])