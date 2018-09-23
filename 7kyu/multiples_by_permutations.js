// We need to calculate the lowest integer n, such that: the values nk1 and nk2 have the same digits but in different order.


function findLowestInt(k) {
    // your code here
    let k2 = k + 1;

    for (let i = 1; ; i++) {
        let temp1 = (k * i).toString().split('');
        let temp2 = (k2 * i).toString().split('');
        let preFlag = true;
        let checkFlag = false;

        for (let j = 0; j < temp2.length; j++) {

            if (!temp2.includes(temp1[j]) || !temp1.includes(temp2[j])) {
                preFlag = false;
                break;
            }
        }
        if (preFlag) {
            for (let y = 0; y < temp2.length; y++) {
                if (temp1[y] != temp2[y]) {
                    checkFlag = true;
                }
            }
        }
        if (checkFlag) {
            console.log(k * i);
            console.log(k2 * i);
            return i;
        }
    }
}



console.log(findLowestInt(855)) //, 999)