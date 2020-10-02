// In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.


function doubles(s){
    let tempStr = '';
    let result = '';

    for (let x = 0; x < s.length; x++) {
        let temp = s[x];
        while (s[x] == temp) {
            tempStr += s[x];
            x++;
        }
        if (tempStr.length % 2 != 0) {
            result += temp;
        }
        console.log(tempStr);
        tempStr = '';
    }
    return result;
}


console.log(doubles('zzzzykkkd')); //,'ykd')